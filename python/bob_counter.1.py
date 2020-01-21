s= "iodfsgjofidjbodbbobsidfjodsijafbob"
i=0
bob=0

for i in range (len(s)):
    if s[i:i+3] == "bob":
        bob+=1

print ('Number of times bob occurs is: ' + str(bob))
    