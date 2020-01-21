# Next, implement the function getGuessedWord that takes in two parameters - a string, secretWord, and a list of letters, lettersGuessed. This function returns a string that is comprised of letters and underscores, based on what letters in lettersGuessed are in secretWord. This shouldn't be too different from isWordGuessed!

# Example Usage:

secretWord = 'apple' 
lettersGuessed = ['e', 'i', 'k', 'l', 'r', 's', 'a']
# >>> print(getGuessedWord(secretWord, lettersGuessed))
# '_ pp_ e'

def getGuessedWord(secretWord, lettersGuessed):
    
    secretWordLetters = []
    done = False
    result = ""
    
    # Find letters in secretWord
    for letter in secretWord:
        secretWordLetters.append(letter)
    
    # Compare letters guessed to secret word
    while not done:
        if not secretWordLetters:
            done = True
        elif secretWordLetters[0] in lettersGuessed:
            result = result + " " + secretWordLetters[0]
            del(secretWordLetters[0])
        elif secretWordLetters[0] not in lettersGuessed:
            result = result + " " + "_"
            del(secretWordLetters[0])
        
    return result
        
            
print(getGuessedWord(secretWord, lettersGuessed))
