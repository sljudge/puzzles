from collections import Counter

message = open('py_challenge3.txt', "r")

message = message.readlines()

data = {}
for line in message:
    for x in line:
        if x in data.keys():
            data[x] += 1
        else:
            data[x] = 0

print(data)
