from sudoku_solved import solved
'''
'a0':0, 'a1':0, 'a2':0, 'a3':0, 'a4':0, 'a5':0, 'a6':0, 'a7':0, 'a8':0,
'b0':0, 'b1':0, 'b2':0, 'b3':0, 'b4':0, 'b5':0, 'b6':0, 'b7':0, 'b8':0,
'c0':0, 'c1':0, 'c2':0, 'c3':0, 'c4':0, 'c5':0, 'c6':0, 'c7':0, 'c8':0,
'd0':0, 'd1':0, 'd2':0, 'd3':0, 'd4':0, 'd5':0, 'd6':0, 'd7':0, 'd8':0,
'e0':0, 'e1':0, 'e2':0, 'e3':0, 'e4':0, 'e5':0, 'e6':0, 'e7':0, 'e8':0,
'f0':0, 'f1':0, 'f2':0, 'f3':0, 'f4':0, 'f5':0, 'f6':0, 'f7':0, 'f8':0,
'g0':0, 'g1':0, 'g2':0, 'g3':0, 'g4':0, 'g5':0, 'g6':0, 'g7':0, 'g8':0,
'h0':0, 'h1':0, 'h2':0, 'h3':0, 'h4':0, 'h5':0, 'h6':0, 'h7':0, 'h8':0,
'i0':0, 'i1':0, 'i2':0, 'i3':0, 'i4':0, 'i5':0, 'i6':0, 'i7':0, 'i8':0
'''
data     = [ [5,3,0,0,7,0,0,0,0],
          [6,0,0,1,9,5,0,0,0],
          [0,9,8,0,0,0,0,6,0],
          [8,0,0,0,6,0,0,0,3],
          [4,0,0,8,0,3,0,0,1],
          [7,0,0,0,2,0,0,0,6],
          [0,6,0,0,0,0,2,8,0],
          [0,0,0,4,1,9,0,0,5],
          [0,0,0,0,8,0,0,7,9]]
loc = [     ['a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
            ['b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
            ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
            ['d0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
            ['e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'],
            ['f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
            ['g0', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8'],
            ['h0', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'],
            ['i0', 'i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8']  ]

rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

def create_board(data, rows):
    i = 0
    board = {}
    for row in data:
        x = 0
        for square in row:
            board[rows[i]+str(x)] = [square, []]
            x += 1
        i += 1
    return board

board = create_board(data, rows)

a = [board['a0'][0], board['a1'][0], board['a2'][0], board['a3'][0], board['a4'][0], board['a5'][0], board['a6'][0], board['a7'][0], board['a8'][0]]
b = [board['b0'][0], board['b1'][0], board['b2'][0], board['b3'][0], board['b4'][0], board['b5'][0], board['b6'][0], board['b7'][0], board['b8'][0]]
c = [board['c0'][0], board['c1'][0], board['c2'][0], board['c3'][0], board['c4'][0], board['c5'][0], board['c6'][0], board['c7'][0], board['c8'][0]]
d = [board['d0'][0], board['d1'][0], board['d2'][0], board['d3'][0], board['d4'][0], board['d5'][0], board['d6'][0], board['d7'][0], board['d8'][0]]
f = [board['f0'][0], board['f1'][0], board['f2'][0], board['f3'][0], board['f4'][0], board['f5'][0], board['f6'][0], board['f7'][0], board['f8'][0]]
e = [board['e0'][0], board['e1'][0], board['e2'][0], board['e3'][0], board['e4'][0], board['e5'][0], board['e6'][0], board['e7'][0], board['e8'][0]]
g = [board['g0'][0], board['g1'][0], board['g2'][0], board['g3'][0], board['g4'][0], board['g5'][0], board['g6'][0], board['g7'][0], board['g8'][0]]
i = [board['i0'][0], board['i1'][0], board['i2'][0], board['i3'][0], board['i4'][0], board['i5'][0], board['i6'][0], board['i7'][0], board['i8'][0]]
h = [board['h0'][0], board['h1'][0], board['h2'][0], board['h3'][0], board['h4'][0], board['h5'][0], board['h6'][0], board['h7'][0], board['h8'][0]]
row = [a, b, c, d, e, f, g, h, i]


def check_rows(board, rows):
    for x in range(1,10):
        print(x)
        for letter in rows:
            for i in range(9):
                if board[letter+str(i)][0] == x:

    print('***')
    print(board)
    return board

print(board)
check_rows(board,rows)
print('***')
print(board)
print(a)
print(rows[2])
