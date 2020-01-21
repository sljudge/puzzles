def max_val(t): 
    """ t, tuple or list
        Each element of t is either an int, a tuple, or a list
        No tuple or list is empty
        Returns the maximum int in t or (recursively) in an element of t 
        
        max_val((5, (1,2), [[1],[2]])) returns 5.
        max_val((5, (1,2), [[1],[9]])) returns 9.
    """ 
    
    t = list(t)
    
    if all(isinstance(x, int) for x in t):
        return max(t)
    else:
        for x in range(len(t)):
            if isinstance(t[x], tuple) or isinstance(t[x], list):
                return(max_val(t))
        
print(max_val(([[2, 1, 5], [4, 2], 6], ([2, 1], (7, 7, 5), 6))))