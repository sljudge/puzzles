# import solved from sudoku_solved

data     = [  [5,3,0,0,7,0,0,0,0],
              [6,0,0,1,9,5,0,0,0],
              [0,9,8,0,0,0,0,6,0],
              [8,0,0,0,6,0,0,0,3],
              [4,0,0,8,0,3,0,0,1],
              [7,0,0,0,2,0,0,0,6],
              [0,6,0,0,0,0,2,8,0],
              [0,0,0,4,1,9,0,0,5],
              [0,0,0,0,8,0,0,7,9]   ]

loc = [     ['a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
            ['b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
            ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
            ['d0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
            ['e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'],
            ['f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
            ['g0', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8'],
            ['h0', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'],
            ['i0', 'i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8']  ]
column = [  ['a0', 'b0', 'c0', 'd0', 'e0', 'f0', 'g0', 'h0', 'i0'],
            ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', 'i1'],
            ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2', 'i2'],
            ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3', 'i3'],
            ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4', 'i4'],
            ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5', 'i5'],
            ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6', 'i6'],
            ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7', 'i7'],
            ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8', 'i8']  ]
box = [     ['a0', 'a1', 'a2', 'b0', 'b1', 'b2', 'c0', 'c1', 'c2'],
            ['a3', 'a4', 'a5', 'b3', 'b4', 'b5', 'c3', 'c4', 'c5'],
            ['a6', 'a7', 'a8', 'b6', 'b7', 'b8', 'c6', 'c7', 'c8'],
            ['d0', 'd1', 'd2', 'e0', 'e1', 'e2', 'f0', 'f1', 'f2'],
            ['d3', 'd4', 'd5', 'e3', 'e4', 'e5', 'f3', 'f4', 'f5'],
            ['d6', 'd7', 'd8', 'e6', 'e7', 'e8', 'f6', 'f7', 'f8'],
            ['g0', 'g1', 'g2', 'h0', 'h1', 'h2', 'i0', 'i1', 'i2'],
            ['g3', 'g4', 'g5', 'h3', 'h4', 'h5', 'i3', 'i4', 'i5'],
            ['g6', 'g7', 'g8', 'h6', 'h7', 'h8', 'i6', 'i7', 'i8']  ]


def create_board(data, loc):
    '''
    Creates dictionary: {board[loc]: [number, [numbers eliminated for square]]}
    '''
    board = {}
    for i in range(9):
        for x in range(9):
            if data[i][x] == 0:
                board[loc[i][x]] = [data[i][x], []]
            elif data[i][x] != 0:
                board[loc[i][x]] = [data[i][x], [data[i][x]]]
    return board

def solve(board, loc, column, box):
    while solved(board) is not True:
        for i in range(1,11):
            for row in loc:
                yco = loc.index(row)
                for space in row:
                    xco = row.index(space)
                    if len(board[space][1]) == 8 and board[space][0] == 0:
                        for i in range(1,10):
                            if i in board[space][1]:
                                continue
                            else:
                                board[space][0] = i
                        print(space, board[space])
                    elif board[space][0] == i:
                        # print(space, board[space], (xco,yco))
                        for x in row:
                            if i not in board[x][1]:
                                board[x][1].append(i)
                        for y in column[xco]:
                            # print(column[xco], i)
                            # print('y = ',y, board[y])
                            if i not in board[y][1]:
                                board[y][1].append(i)
                                # print((xco, yco))
                            # print('y = ',y, board[y])
                        # print('///')
                        if yco < 3:
                            if xco < 3:
                                for z in box[0]:
                                    if i not in board[z][1]:
                                        board[z][1].append(i)
                            elif xco < 6:
                                for z in box[1]:
                                    if i not in board[z][1]:
                                        board[z][1].append(i)
                            elif xco < 9:
                                for z in box[2]:
                                    if i not in board[z][1]:
                                        board[z][1].append(i)
                        elif yco < 6:
                            if xco < 3:
                                for z in box[3]:
                                    if i not in board[z][1]:
                                        board[z][1].append(i)
                            elif xco < 6:
                                for z in box[4]:
                                    if i not in board[z][1]:
                                        board[z][1].append(i)
                            elif xco < 9:
                                for z in box[5]:
                                    if i not in board[z][1]:
                                        board[z][1].append(i)
                        elif yco < 9:
                            if xco < 3:
                                for z in box[6]:
                                    if i not in board[z][1]:
                                        board[z][1].append(i)
                            elif xco < 6:
                                for z in box[7]:
                                    if i not in board[z][1]:
                                        board[z][1].append(i)
                            elif xco < 9:
                                for z in box[8]:
                                    if i not in board[z][1]:
                                        board[z][1].append(i)
        print(board)
        output = []
        for i in range(9):
            output.append([board[x][0] for x in loc[i]])
        return output

board = create_board(data, loc)
answer = solve(board, loc, column, box)
print(answer)
# for a in loc:
#     for b in a:
#         print(board[b])
# print(solved(board))

# [[5, 3, 4, 6, 7, 8, 1, 2, 9],       #Mistake
#  [6, 7, 2, 1, 9, 5, 3, 8, 4],
#  [1, 9, 8, 2, 3, 4, 5, 6, 7],
#  [8, 5, 9, 7, 6, 1, 0, 4, 3],
#  [4, 2, 6, 8, 5, 3, 2, 7, 1],
#  [7, 5, 3, 9, 2, 1, 5, 8, 6],
#  [9, 6, 1, 3, 5, 7, 2, 8, 4],
#  [2, 8, 7, 4, 1, 9, 3, 9, 5],
#  [3, 4, 5, 5, 8, 6, 1, 7, 9]]
