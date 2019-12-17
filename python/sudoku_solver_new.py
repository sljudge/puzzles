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

def find_row(board, letter):
    row = [board[letter+str(x)][0] for x in range(9)]
    return row

def find_column(board,rows,number):
    column = [board[letter+str(number)] for letter in rows]
    return column

######
board = create_board(data, rows)
#####
#BOXES
A = [board['a0'], board['a1'], board['a2'], board['b0'], board['b1'], board['b2'], board['c0'], board['c1'], board['c2']]
B = [board['a3'], board['a4'], board['a5'], board['b3'], board['b4'], board['b5'], board['c3'], board['c4'], board['c5']]
C = [board['a6'], board['a7'], board['a8'], board['b6'], board['b7'], board['b8'], board['c6'], board['c7'], board['c8']]
D = [board['d0'], board['d1'], board['d2'], board['e0'], board['e1'], board['e2'], board['f0'], board['f1'], board['f2']]
E = [board['d3'], board['d4'], board['d5'], board['e3'], board['e4'], board['e5'], board['f3'], board['f4'], board['f5']]
F = [board['d6'], board['d7'], board['d8'], board['e6'], board['e7'], board['e8'], board['f6'], board['f7'], board['f8']]
G = [board['g0'], board['h1'], board['i2'], board['g0'], board['h1'], board['i2'], board['g0'], board['h1'], board['i2']]
H = [board['g3'], board['h4'], board['i5'], board['g3'], board['h4'], board['i5'], board['g3'], board['h4'], board['i5']]
I = [board['g6'], board['h7'], board['i8'], board['g6'], board['h7'], board['i8'], board['g6'], board['h7'], board['i8']]
boxes = [A, B, C, D, E, F, G, H, I]
#ROWS
a = find_row(board, 'a')
b = find_row(board, 'b')
c = find_row(board, 'c')
d = find_row(board, 'd')
e = find_row(board, 'e')
f = find_row(board, 'f')
g = find_row(board, 'g')
h = find_row(board, 'h')
i = find_row(board, 'i')
rows = [a, b, c, d, e, f, g, h, i]


#COLUMNS
zero = find_column(board, rows, 0)
one = find_column(board, rows, 1)
two = find_column(board, rows, 2)
three = find_column(board, rows, 3)
four = find_column(board, rows, 4)
five = find_column(board, rows, 5)
six = find_column(board, rows, 6)
seven = find_column(board, rows, 7)
eight = find_column(board, rows, 8)
columns = [zero, one, two, three, four, five, six, seven, eight]

# def solve(board):
#     loc = i for i in range(9)
#     for x in range(9):              #number to be checked
#         for i in loc:               #move through boxes
#             if x in boxes[loc]:     #check if number is in box
#                 continue
#             elif loc == 0:
#                 if i in item for item in [a, b, c]
#
# def check_horizontal(board, loc, x):
#     if loc in [0, 3, 6]:            #left hand side
#         if x in boxes[loc + 1] and boxes[loc + 2]



print(board)
print(board['a4'][0])

#ROWS
# a = [board['a0'], board['a1'], board['a2'], board['a3'], board['a4'], board['a5'], board['a6'], board['a7'], board['a8']]
# b = [board['b0'], board['b1'], board['b2'], board['b3'], board['b4'], board['b5'], board['b6'], board['b7'], board['b8']]
# c = [board['c0'], board['c1'], board['c2'], board['c3'], board['c4'], board['c5'], board['c6'], board['c7'], board['c8']]
# d = [board['d0'], board['d1'], board['d2'], board['d3'], board['d4'], board['d5'], board['d6'], board['d7'], board['d8']]
# e = [board['e0'], board['e1'], board['e2'], board['e3'], board['e4'], board['e5'], board['e6'], board['e7'], board['e8']]
# f = [board['f0'], board['f1'], board['f2'], board['f3'], board['f4'], board['f5'], board['f6'], board['f7'], board['f8']]
# g = [board['g0'], board['g1'], board['g2'], board['g3'], board['g4'], board['g5'], board['g6'], board['g7'], board['g8']]
# h = [board['h0'], board['h1'], board['h2'], board['h3'], board['h4'], board['h5'], board['h6'], board['h7'], board['h8']]
# i = [board['i0'], board['i1'], board['i2'], board['i3'], board['i4'], board['i5'], board['i6'], board['i7'], board['i8']]

#COLUMS
# zero = [board['a0'], board['b0'], board['c0'], board['d0'], board['e0'], board['f0'], board['g0'], board['h0'], board['i0']]
# one = [board['a1'], board['b1'], board['c1'], board['d1'], board['e1'], board['f1'], board['g1'], board['h1'], board['i1']]
# two = [board['a2'], board['b2'], board['c2'], board['d2'], board['e2'], board['f2'], board['g2'], board['h2'], board['i2']]
# three = [board['a3'], board['b3'], board['c3'], board['d3'], board['e3'], board['f3'], board['g3'], board['h3'], board['i3']]
# four = [board['a4'], board['b4'], board['c4'], board['d4'], board['e4'], board['f4'], board['g4'], board['h4'], board['i4']]
# five = [board['a5'], board['b5'], board['c5'], board['d5'], board['e5'], board['f5'], board['g5'], board['h5'], board['i5']]
# six = [board['a6'], board['b6'], board['c6'], board['d6'], board['e6'], board['f6'], board['g6'], board['h6'], board['i6']]
# seven = [board['a7'], board['b7'], board['c7'], board['d7'], board['e7'], board['f7'], board['g7'], board['h7'], board['i7']]
# eight = [board['a8'], board['b8'], board['c8'], board['d8'], board['e8'], board['f8'], board['g8'], board['h8'], board['i8']]
