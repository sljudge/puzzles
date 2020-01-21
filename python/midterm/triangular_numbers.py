def is_triangular(k):
    """
    k, a positive integer
    returns True if k is triangular and False if not
    """
    # 1               1
    # 1+2             3  
    # 1+2+3           6
    # 1+2+3+4         10
    # 1+2+3+4+5       15
    # 1+2+3+4+5+6+7     28
    # 1+2+3+4+5+6+7+8   36
    # 1+2+3+4+5+6+7+8+9 45
    
    x = 1
    total = 1
    while total < k:
        total = (total + (x+1))
        x += 1
    
    if k == total:
        return True
    elif k != total:
        return False
        
is_triangular(1)