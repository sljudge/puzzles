from random import randint
from collections import Counter

def get_bingo_card():
    '''
     - Create random bingo card
        eg. [ "B14", "B12", "B5", "B6", "B3", "I28", "I27", ... ]
    5 numbers from the B column in the range 1 to 15
    5 numbers from the I column in the range 16 to 30
    4 numbers from the N column in the range 31 to 45
    5 numbers from the G column in the range 46 to 60
    5 numbers from the O column in the range 61 to 75
    '''
    B = []
    I = []
    N = []
    G = []
    O = []

    for x in range(5):
        unique = False
        while not unique:
            B.append("B" + str(randint(1,15)))
            print(B)
            if B.count(B[x]) > 1:
                B[x] = "B" + str(randint(1,15))
                print(B[x])
                break
            I.append("I" + str(randint(16,30)))
            print(I)
            if I.count(I[x]) > 1:
                continue
            N.append("N" + str(randint(31,45)))
            print(N)
            if N.count(N[x]) > 1:
                continue
            G.append("G" + str(randint(46,60)))
            print(G)
            if G.count(G[x]) > 1:
                continue
            O.append("O" + str(randint(61,75)))
            print(O)
            if O.count(O[x]) > 1:
                continue
            unique = True
    N[2] = 'free'
    output = [B + I + N + G + O]

    print(output)

get_bingo_card()
