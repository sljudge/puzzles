import random
def rgb(r, g, b):
    '''passing in RGB decimal values will result in a hexadecimal representation being returned'''
    def find_hex(x):
        # Ensure x is within hexadecimal limits 0 - 255
        if x > 255:
            x = 255
        elif x < 0:
            x = 0
        x = round(x)
        #######
        out = []
        letters = {10:'A', 11:'B', 12:'C', 13:'D', 14:'E', 15:'F'}
        while x/16 > 0:
            if x%16 in letters:
                out.insert(0, letters[x%16])
            else:
                out.insert(0, x%16)
            x = x//16
        if len(out) == 0:
            out = ['00']
        elif len(out) == 1:
            out.insert(0, '0')
        out = ''.join(str(a) for a in out)
        return out
    return ''.join([find_hex(r), find_hex(g),find_hex(b)])

for x in range(20):
    a = random.randint(0,256)
    b = random.randint(0,256)
    c = random.randint(0,256)
    print('-------------------')
    print (a, b, c )
    print(rgb(a, b, c))

print(rgb(0, 255, 125))
