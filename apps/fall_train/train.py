import json
import sys
from tqdm import tqdm
import torch.nn as nn
import torch.nn.functional as F
import random as rnd
from torch.optim import Adam
import torch
import torch.nn as nn
import torch.nn.functional as F
import copy

with open("positive.json") as fd:
    positives = json.load(fd)
with open("negative.json") as fd:
    negatives = json.load(fd)

print("Positive sample count", len(positives))
print("Negative sample count", len(negatives))

def normalize_accel(accel_values):
    return [ v/8 for v in accel_values] #8G

def normalize_gyro(gyro_values):
    return [ v/(2*3.14) for v in gyro_values] #2*pi angle

positives = [(torch.tensor([v["accel_x"] + v["accel_y"] + v["accel_z"] +\
                v["gyro_x"] + v["gyro_y"] + v["gyro_z"]]),
                            torch.tensor([1.0])) for v in positives]
negatives = [(torch.tensor([v["accel_x"] + v["accel_y"] + v["accel_z"] +\
                v["gyro_x"] + v["gyro_y"] + v["gyro_z"]]),
                            torch.tensor([-1.0])) for v in negatives]

samples = positives + negatives
rnd.shuffle(samples)

class Network(nn.Module):

    def __init__(self):
        super().__init__()

        self.fc1 = nn.Linear(400*6, 16)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(16, 8)
        self.fc3 = nn.Linear(8,1)

    def forward(self,x):

        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        x = torch.tanh(self.fc3(x))

        return x

net = Network()
mse = nn.MSELoss()
EPOCHS = 200
opt = Adam(net.parameters(), lr = 0.001)

def train(model, x, y, optimizer, criterion):
    model.zero_grad()
    output = model(x)
    loss = criterion(output,y)
    loss.backward()
    optimizer.step()

    return loss, output

best_accuracy = 0
best_model = None
train_frac = 0.6
train_len = int(len(samples)*train_frac)
train_samples = samples[:train_len]
validate_samples = samples[train_len:]
for epoch in range(EPOCHS):
    epoch_loss = 0
    correct = 0
    rnd.shuffle(samples)
    for x_train, y_train in train_samples:
        loss, predictions = train(net, x_train, y_train, opt, mse)
        #print("LOSS", loss, predictions, y_train)
        i = torch.round(predictions[0])
        if i == y_train:
            correct += 1
        epoch_loss+=loss
    acc = (correct/len(train_samples))
    print('Epoch {} Train Accuracy : {}'.format(epoch+1, acc*100))
    print('Epoch {} Train Loss : {}'.format((epoch+1),epoch_loss))
    correct = 0
    for x_train, y_train in validate_samples:
        with torch.no_grad():
            output = net(x_train)
            i = torch.round(output[0])
            if i == y_train:
                correct += 1
    acc = (correct/len(validate_samples))
    print("Epoch", epoch+1, "Validate accuracy", acc*100, "%")

    if acc > best_accuracy:
        best_accuracy = acc
        best_model = copy.deepcopy(net)

print("Best validate accuracy", best_accuracy*100, "%")

with torch.no_grad():
    fc1w = best_model.fc1.weight.data.tolist()
    fc2w = best_model.fc2.weight.data.tolist()
    fc3w = best_model.fc3.weight.data.tolist()

    with open(sys.argv[1], "w") as fd:
        fd.write("fc1 : const float[16][400*6] = " + str(fc1w))
        fd.write("fc2 : const float[8][16] = " + str(fc2w))
        fd.write("fc3 : const float[8] = " + str(fc3w[0]))
