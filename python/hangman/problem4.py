# ************
# KEY VARIABLES
# *************
secretWord = "apple"
lettersGuessed = []
mistakesMade = 0
availableLetters = []


# HELPER FUNCTIONS
# -----------------
# *****************
# ARE YOU A WINNER?
# *****************
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

# ****************
# DISPLAY PROGRESS
# ****************
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

# **********************
# WHAT LETTERS ARE LEFT?
# **********************
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

# *********
# MAIN GAME
# *********
def hangman(secretWord):
    '''
    secretWord: string, the secret word to guess.

    Starts up an interactive game of Hangman.

    * At the start of the game, let the user know how many 
      letters the secretWord contains.

    * Ask the user to supply one guess (i.e. letter) per round.

    * The user should receive feedback immediately after each guess 
      about whether their guess appears in the computers word.

    * After each round, you should also display to the user the 
      partially guessed word so far, as well as letters that the 
      user has not yet guessed.

    Follows the other limitations detailed in the problem write-up.
    '''
    
    # I'm thinking of a word...
    print (getGuessedWord(secretWord, lettersGuessed))
    
    # User guess
    lettersGuessed = []
    newGuess = input('Please input a letter...')
    lettersGuessed = lettersGuessed.append(newGuess)
    
    # Feedback
    
    