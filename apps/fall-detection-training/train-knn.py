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

positive_samples = []
negative_samples = []
FRAME_SIZE = 200
STRIDE = 20
INPUT_SIZE = 120

def take_derivative(data):
    prev_value = data[0]
    for i in range(1,len(data)):
        curr_value = data[i]
        data[i] = curr_value - prev_value
        prev_value = curr_value
    data[0] = data[1]

def featurize(ax, ay, az, gx, gy, gz):
    idx: int
    features = [0.0]*120
    for i in range(0, 200):
        idx =  round(10 + ax[i]*10/8)
        idx = max(0, min(idx, 19))
        features[idx] += 1.0
        idx =  round(10 + ay[i]*10/8)
        idx = max(0, min(idx, 19))
        features[idx+20] += 1.0
        idx =  round(10 + az[i]*10/8)
        idx = max(0, min(idx, 19))
        features[idx+40] += 1.0
        idx =  round(10 + gx[i]*10/8)
        idx = max(0, min(idx, 19))
        features[idx+60] += 1.0
        idx =  round(10 + gy[i]*10/8)
        idx = max(0, min(idx, 19))
        features[idx+80] += 1.0
        idx =  round(10 + gz[i]*10/8)
        idx = max(0, min(idx, 19))
        features[idx+100] += 1.0
    return features

def generate_samples(data, samples, value):
    for v in data:
        accel_x = v["accel_x"]
        take_derivative(accel_x)
        accel_y = v["accel_y"]
        take_derivative(accel_y)
        accel_z = v["accel_z"]
        take_derivative(accel_z)
        gyro_x = v["gyro_x"]
        take_derivative(gyro_x)
        gyro_y = v["gyro_y"]
        take_derivative(gyro_y)
        gyro_z = v["gyro_z"]
        take_derivative(gyro_z)
        features = featurize(accel_x, accel_y, accel_z, gyro_x, gyro_y, gyro_z)
        print("FEATURES", features, "VALUE", value)
        sample = torch.tensor([features])
        samples.append((sample, torch.tensor([value])))

generate_samples(positives, positive_samples, 1.0)
generate_samples(negatives, negative_samples, 0.0)

samples = positive_samples + negative_samples
rnd.shuffle(samples)

def swish(x):
    return x * torch.sigmoid(x)

class Network(nn.Module):

    def __init__(self):
        super().__init__()

        self.fc1 = nn.Linear(INPUT_SIZE, 1)
        self.relu = nn.ReLU()
        #self.fc2 = nn.Linear(16, 1)
        #self.fc3 = nn.Linear(8,1)

    def forward(self,x):

        x = torch.sigmoid(self.fc1(x))
        #x = torch.sigmoid(self.fc2(x))

        return x

net = Network()
mse = nn.MSELoss()
EPOCHS = 200
opt = Adam(net.parameters(), lr = 0.01)

def train(model, x, y, optimizer, criterion):
    model.zero_grad()
    output = model(x)
    output = output.squeeze(-1)
    loss = criterion(output,y)
    loss.backward()
    optimizer.step()

    return loss, output

best_accuracy = 0
best_model = None
train_frac = 0.7
validate_frac = 0.15
train_len = int(len(samples)*train_frac)
#validate_len = int(len(samples)*validate_frac)
train_samples = samples[:train_len]
validate_samples = samples[train_len:]
#test_samples = samples[train_len+validate_len:]
print("TRAIN SIZE", len(train_samples), "VALIDATE SIZE", len(validate_samples))

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

    if acc >= best_accuracy:
        best_accuracy = acc
        best_model = copy.deepcopy(net)
        #if acc == 1.0:
        #    break

print("Best validate accuracy", best_accuracy*100, "%")

#correct = 0
#for x_train, y_train in test_samples:
#    with torch.no_grad():
#        output = net(x_train)
#        i = torch.round(output[0])
#        if i == y_train:
#            correct += 1
#acc = (correct/len(test_samples))
#print("Test accuracy", acc*100, "%")

with torch.no_grad():
    fc1w = best_model.fc1.weight.data.tolist()
    #fc2w = best_model.fc2.weight.data.tolist()
    #fc3w = best_model.fc3.weight.data.tolist()

    with open(sys.argv[1], "w") as fd:
        fd.write("fc1 : const float[" + str(INPUT_SIZE) + "] = " + str(fc1w[0]))
        fd.write("\n\n")
        #fd.write("fc2 : const float[16] = " + str(fc2w[0]))
        #fd.write("\n\n")
        #fd.write("fc3 : const float[8] = " + str(fc3w[0]))
        #fd.write("\n\n")
