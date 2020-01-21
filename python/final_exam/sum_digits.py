def sum_digits(s):
    """ assumes s a string
        Returns an int that is the sum of all of the digits in s.
          If there are no digits in s it raises a ValueError exception. 
        For example, sum_digits("a;35d4") returns 12.
    """
    total = 0
    digits = False
    for x in s:
        try:
            total += int(x)
            digits = True
        except ValueError:
            continue
    
    if not digits:
        raise ValueError
    else:
        return total

s = "a;d"        
print(sum_digits(s))
        