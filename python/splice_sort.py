s="acdjextamy"
n=0
i=0
compSub=""
sub=""
print (len(s))

while i < (len(s)-1):
    currentChar = s[i]
    nextChar = s[i+1]
    if currentChar<nextChar and i<(len(s)-1):
        i+=1
    else:
        compSub=s[n:i+1]
        print (compSub)
        i+=1
        n=i
print (compSub)    

        