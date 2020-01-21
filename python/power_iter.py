def iterPower(base, exp):
    '''
    base: int or float.
    exp: int >= 0
 
    returns: int or float, base^exp
    '''
    i = 2
    result = base

    if exp == 0:
        result = 1
    elif exp == 1:
        result = base
    else:
        while i <= exp:
            result = result * base
            i += 1
    return result
