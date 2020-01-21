# Hangman game
#

# -----------------------------------
# Helper code
# You don't need to understand this helper code,
# but you will have to know how to use the functions
# (so be sure to read the docstrings!)

import random

WORDLIST_FILENAME = "words.txt"

def loadWords():
    """
    Returns a list of valid words. Words are strings of lowercase letters.
    
    Depending on the size of the word list, this function may
    take a while to finish.
    """
    print("Loading word list from file...")
    # inFile: file
    inFile = open(WORDLIST_FILENAME, 'r')
    # line: string
    line = inFile.readline()
    # wordlist: list of strings
    wordlist = line.split()
    print("  ", len(wordlist), "words loaded.")
    return wordlist

def chooseWord(wordlist):
    """
    wordlist (list): list of words (strings)

    Returns a word from wordlist at random
    """
    return random.choice(wordlist)

# end of helper code
# -----------------------------------

# Load the list of words into the variable wordlist
# so that it can be accessed from anywhere in the program
wordlist = loadWords()

def isWordGuessed(secretWord, lettersGuessed):
    '''
    secretWord: string, the word the user is guessing
    lettersGuessed: list, what letters have been guessed so far
    returns: boolean, True if all the letters of secretWord are in lettersGuessed;
      False otherwise
    '''
    secretWordLetters = []
    done = False
    
    # Find letters in secretWord
    for letter in secretWord:
        if letter not in secretWordLetters:
            secretWordLetters.append(letter)
    
    # Compare letters guessed to secret word
    while not done:
        if not secretWordLetters:
            done = True
            return True
        elif secretWordLetters[0] in lettersGuessed:
            del(secretWordLetters[0])
        elif secretWordLetters[0] not in lettersGuessed:
            done = True
            return False
        
        

def getGuessedWord(secretWord, lettersGuessed):
    '''
    secretWord: string, the word the user is guessing
    lettersGuessed: list, what letters have been guessed so far
    returns: string, comprised of letters and underscores that represents
      what letters in secretWord have been guessed so far.
    '''
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


def getAvailableLetters(lettersGuessed):
    '''
    lettersGuessed: list, what letters have been guessed so far
    returns: string, comprised of letters that represents what letters have not
      yet been guessed.
    '''
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
    print ("Welcome to the game Hangman!")
    print ("I am thinking of a word that is " + str(len(secretWord)) + " letters long.")
    print ('----------------------------') 
    
    # Variables
    global lettersGuessed
    lettersGuessed = []
    global availableLetters
    availableLetters = getAvailableLetters(lettersGuessed)
    global guessesLeft
    guessesLeft = 8
    
    # User Status
    print ("You have " + str(guessesLeft) + " guesses left")
    print ("Available letters: " + availableLetters)
    
    # New Guess
    while guessesLeft > 0:
        # New Guess
        newGuess = (input('Please guess a letter: '))
        if newGuess in lettersGuessed:
            print ('Oops! You\'ve already guessed that letter: ' + getGuessedWord(secretWord, lettersGuessed))
            print ('----------------------------')
            print ("You have " + str(guessesLeft) + " guesses left.")
            print ("Available letters: " + getAvailableLetters(lettersGuessed))
            continue
        else:    
            lettersGuessed.append(newGuess)
        # Good or Bad Guess?
        if newGuess in secretWord:
            print ("Good guess: " + getGuessedWord(secretWord, lettersGuessed))
        elif newGuess not in secretWord:
            print ("Oops! That letter is not in my word: " + getGuessedWord(secretWord, lettersGuessed))
            guessesLeft -= 1
        # Are you a winner or a loser?
        if isWordGuessed(secretWord, lettersGuessed) == True:
            print ('----------------------------')
            print ('Congratulations, you won!')
            break
        elif guessesLeft == 0:
            break
        # New Status
        print ('----------------------------')
        print ("You have " + str(guessesLeft) + " guesses left.")
        print ("Available letters: " + getAvailableLetters(lettersGuessed))
        
    # You lose!
    if isWordGuessed(secretWord, lettersGuessed) == False:
        print ('----------------------------')
        print ('Sorry, you ran out of guesses. The word was ' + secretWord + '.')
            





# When you've completed your hangman function, uncomment these two lines
# and run this file to test! (hint: you might want to pick your own
# secretWord while you're testing)

# secretWord = chooseWord(wordlist).lower()
secretWord = 'c'
print(hangman(secretWord))
