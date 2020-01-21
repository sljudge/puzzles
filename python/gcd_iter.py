def gcdIter(a, b):
    '''
    a, b: positive integers
    
    returns: a positive integer, the greatest common divisor of a & b.
    '''
    
    
    if a > b:
        i = b
        while i >= 1:
            if b % i == 0 and a % i == 0:
                return i
            else:
                i -= 1
                
    if b > a:
        i = a
        while i >= 1:
            if b % i == 0 and a % i == 0:
                return i
            else:
                i -= 1 
