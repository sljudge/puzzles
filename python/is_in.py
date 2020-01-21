def isIn(char, aStr):
    '''
    char: a single character
    aStr: an alphabetized string
    
    returns: True if char is in aStr; False otherwise
    '''
    # Your code here
   
    if len(aStr) > 0:
        high = int(len(aStr))
        low = 0
        midChar = aStr[int(len(aStr) / 2)]
        lastChar = aStr[high - 1]
        firstChar = aStr[low]
        
        if char == midChar:
            return (True)
        elif char > lastChar or char < firstChar or aStr == '':
            return (False)
        elif char < midChar:
            high = int(high / 2)
            return isIn(char, aStr[low:high])
        elif char > midChar:
            low = int(high /2)
            return isIn(char, aStr[low:high])
    else:
        return (False)
    


