# d = {1:10, 2:20, 3:30}          then dict_invert(d) returns     {10: [1], 20: [2], 30: [3]}
# d = {1:10, 2:20, 3:30, 4:30}    then dict_invert(d) returns     {10: [1], 20: [2], 30: [3, 4]}
# d = {4:True, 2:True, 0:True}    then dict_invert(d) returns     {True: [0, 2, 4]}

def dict_invert(d):
    '''
    d: dict
    Returns an inverted dictionary according to the instructions above
    '''
    inverted_dictionary = {}
    keys = []
    values = []
    key_values=[]
    n=0
    
    for key, value in d.items():
        keys.append(value)
        values.append(key)
        
    while n < len(d.items()):
        if n == 0:
            key_values += str(values[n])
            key_values = [int(x) for x in key_values]
            inverted_dictionary[keys[n]] = sorted(key_values)
            # key_values += str(values[n])
        elif keys[n] == keys[n-1]:
            key_values += str(values[n])
            key_values = [int(x) for x in key_values]
            inverted_dictionary[keys[n]] = sorted(key_values)
        else:
            key_values = str(values[n])
            key_values = [int(x) for x in key_values]
            inverted_dictionary[keys[n]] = sorted(key_values)
        # print (inverted_dictionary)
        n += 1
    
    # print (keys)
    # print (values)
    return inverted_dictionary
    
d = {0: 2, 9: 0, 2: 9, 5: 9} 
print (dict_invert(d))