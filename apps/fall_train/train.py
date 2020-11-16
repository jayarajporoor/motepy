import json
import sys

with open("positive.json") as fd:
    positives = json.load(fd)
with open("negative.json") as fd:
    negatives = json.load(fd)

print("Positive sample count", len(positives))
print("Negative sample count", len(negatives))
