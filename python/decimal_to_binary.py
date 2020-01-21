num=11
result=''

if num <0:
    is_neg = True
    num = abs(num)
else:
    is_neg = False

if num == 0:
    result = '0'

while num > 0:
    result = str(num%2) + result
    num = num//2
if is_neg:
    result = '-' + result
    
print(result)

# print 9 // 4
# print 18 // 5
# print 37 // 6

print (str(bin(11)[2:]))

