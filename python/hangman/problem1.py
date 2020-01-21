
secretWord = 'apple' 
lettersGuessed = ['e', 'i', 'k', 'p', 'r', 's', 'l']
# >>> print(isWordGuessed(secretWord, lettersGuessed))
# False

def isWordGuessed(secretWord, lettersGuessed):
    
    secretWordLetters = []
    done = False
    
    # Find letters in secretWord
    for letter in secretWord:
        if letter not in secretWordLetters:
            secretWordLetters.append(letter)
    
    # Compare letters guessed to secret word
    while not done:
        if secretWordLetters[0] in lettersGuessed:
            del(secretWordLetters[0])
        elif secretWordLetters[0] not in lettersGuessed:
            done = True
            return False
        elif not secretWordLetters:
            done = True
            return True
        
        

            
print(isWordGuessed(secretWord, lettersGuessed))
