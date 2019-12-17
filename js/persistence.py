def persistence(number):
    ''' 
    Takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
    eg. persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
    '''
    number = str(number)
    number = [x for x in number]
    for i in range(len(number)):
        number = number[i]*number[i+1]
        number.pop(number[i])
    return number

print(persistence(39))
    
