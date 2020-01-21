def print_without_vowels(s):
    '''
    s: the string to convert
    Finds a version of s without vowels and whose characters appear in the 
    same order they appear in s. Prints this version of s.
    Does not return anything
    '''
    temp = list(s)
    output = []
    i = 0
    
    while i < len(temp):
        if temp[i] in ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'):
            i += 1
        else:
            output.append(temp[i])
            i += 1
    
    output = "".join(output)     
    print output
    
s = 'Here is a simple sentence that makes sense. BYE.'    
print print_without_vowels('Here is a simple sentence that makes sense. BYE.')