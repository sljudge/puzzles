s="sodfjpodjfsdfooiise"
i = 0
v = 0

while (i < len(s)):
   if s[i] == 'a' or s[i] == 'e' or s[i] == 'i' or s[i] == 'o' or s[i] == 'u':
      v+=1
   i += 1
print ("Number of vowels: " + str(v))
