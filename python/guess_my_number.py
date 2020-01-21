low = 0
high = 100
guess = 50
response = ""

print ("Please think of a number between 0 and 100!")

while response != "c":    
    print ("Is your number " + str(guess) + "?")
    response = input("Enter 'h' to indicate the guess is too high. Enter 'l' to indicate the guess is too low. Enter 'c' to indicate I guessed correctly. ")
    
    if response == 'h':
        high = guess
        guess = int((high+low)/2)
    elif response == 'l':
        low = guess
        guess = int((high+low)/2)
    elif response == 'c':
        print ("Game over. Your secret number was: " + str(guess))
        break
    else:
        print ("Sorry I did not understand your input.")


    
