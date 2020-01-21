s="tsbbcuhihtjkfthbcwhschb"
n=0
i=0
x=1
compSub=""
sub=""

print (len(s))

while i <= (len(s)-1) and x <(len(s)):
    currentChar = s[i]
    nextChar = s[x]
    
    # Iteration through string    
    if currentChar<=nextChar and i==(len(s)-2):
        compSub=s[n:i+2]
        print (compSub)
        i+=1
    elif currentChar<=nextChar and i<(len(s)-1):
        i+=1
        x+=1
    else: 
        compSub=s[n:i+1]
        print (compSub)
        i+=1
        x+=1
        n=i

# Comparison of strings
    if len(sub)<len(compSub):
        sub = compSub
    
print (sub)


if len(s) == 1:
    print ("The longest substring in alphabetical order is: "+s)
else:   
    print ("The longest substring in alphabetical order is: " +sub)