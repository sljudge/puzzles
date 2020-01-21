# Next, implement the function getAvailableLetters that takes in one parameter - a list of letters, lettersGuessed. This function returns a string that is comprised of lowercase English letters - all lowercase English letters that are not in lettersGuessed.

# Example Usage:

lettersGuessed = ['e', 'i', 'k', 'p', 'r', 's', 'z', 'a', 'b']
# >>> print(getAvailableLetters(lettersGuessed))
# abcdfghjlmnoqtuvwxyz

def getAvailableLetters(lettersGuessed):
    import string
    alphabet = string.ascii_lowercase
    temp = []
    result = []
    done = False
    
    for char in alphabet:
        temp.append(char)
    
    while not done:
        if not temp:
            done = True
        elif temp[0] in lettersGuessed:
            del (temp[0])
        elif temp[0] not in lettersGuessed:
            result.append(temp[0])
            del(temp[0])
    
    result = ''.join(result)
    return result
            
print(getAvailableLetters(lettersGuessed))
    
    
    
    

    
