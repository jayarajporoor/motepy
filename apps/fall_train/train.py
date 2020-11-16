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

with open("positive.json") as fd:
    positives = json.load(fd)
with open("negative.json") as fd:
    negatives = json.load(fd)

print("Positive sample count", len(positives))
print("Negative sample count", len(negatives))
positives = [(torch.tensor([v["accel_x"] + v["accel_y"] + v["accel_z"] + v["gyro_x"] + v["gyro_y"] + v["gyro_z"]]), torch.tensor([1.0])) for v in positives]
negatives = [(torch.tensor([v["accel_x"] + v["accel_y"] + v["accel_z"] + v["gyro_x"] + v["gyro_y"] + v["gyro_z"]]), torch.tensor([0.0])) for v in negatives]

samples = positives + negatives
rnd.shuffle(samples)

def swish(x):
    return x * F.sigmoid(x)

class Network(nn.Module):

    def __init__(self):
        super().__init__()

        self.fc1 = nn.Linear(400*6, 16)
        self.fc2 = nn.Linear(16, 8)
        self.fc3 = nn.Linear(8,1)

    def forward(self,x):

        x = swish(self.fc1(x))
        x = swish(self.fc2(x))
        x = swish(self.fc3(x))
        x = F.sigmoid(x)

        return x

net = Network()
criterion = nn.MSELoss()
EPOCHS = 200
optm = Adam(net.parameters(), lr = 0.001)

def train(model, x, y, optimizer, criterion):
    model.zero_grad()
    output = model(x)
    loss =criterion(output,y)
    loss.backward()
    optimizer.step()

    return loss, output

best_accuracy = 0
for epoch in range(EPOCHS):
    epoch_loss = 0
    correct = 0
    for bidx, value_pair in enumerate(samples):
        x_train, y_train = value_pair
        loss, predictions = train(net,x_train,y_train, optm, criterion)
        print("LOSS", loss, predictions, y_train)
        for idx, i in enumerate(predictions):
            i  = torch.round(i)
            if i == y_train:
                correct += 1
        epoch_loss+=loss
    acc = (correct/len(samples))
    print('Epoch {} Accuracy : {}'.format(epoch+1, acc*100))
    print('Epoch {} Loss : {}'.format((epoch+1),epoch_loss))
    if acc > best_accuracy:
        best_accuracy = acc
print("Best accuracy", best_accuracy)

with torch.no_grad():
    print(net.fc1.weight.data.tolist())
