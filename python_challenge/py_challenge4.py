# Finding pattern AAAbCCC using regular expression
import re
with open("py_challenge4.txt") as file:
    data = file.read();
s=data

#                           [^A-Z]+[A-Z]{3}([a-z])[A-Z]{3}[^A-Z]+
# [a-z]: 1 lower case letter
# [A-Z]: 1 upper case letter
# [A-Z]{3}: 3 consecutive upper case letters
# [A-Z]{3}[a-z][A-Z]{3}: 3 upper case letters + 1 lower case letter + 3 upper case letters
# [^A-Z]: any character BUT an upper case letter
# [^A-Z]+: at least one such character
# [^A-Z]+[A-Z]{3}[a-z][A-Z]{3}[^A-Z]+: something else before and after our patter(AAAbCCC) so there's no more than 3 consecutive upper case letters on each side
# [^A-Z]+[A-Z]{3}([a-z])[A-Z]{3}[^A-Z]+: ...and we only care about the lower case

result = re.findall("[^A-Z]+[A-Z]{3}([a-z])[A-Z]{3}[^A-Z]+", s)
print (result)
