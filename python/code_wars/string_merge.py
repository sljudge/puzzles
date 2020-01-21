def string_merge(string1, string2, letter):
    '''string_merge("hello", "world", "l")      ==>  "held"
    string_merge("coding", "anywhere", "n")  ==>  "codinywhere"
    string_merge("jason", "samson", "s")     ==>  "jasamson"
    string_merge("wonderful", "people", "e") ==>  "wondeople"'''

    # S.find(substring [,start [,end]])
    return string1[:string1.find(letter)] + string2[string2.find(letter):]

print(string_merge("coding", "anywhere", "n"))
print(string_merge("jason", "samson", "s"))
