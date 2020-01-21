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

def solved(board, loc, column, box):
    """Check whether a Sudoku puzzle is completed correctly where board is a dictionary"""
    def check(board, item):
        for i in range(1,10):
            for object in item:
                x = []
                for pos in object:
                    x.append(board[pos][0])
                if sorted(x) != [1,2,3,4,5,6,7,8,9]:
                    return False
        return True

    if check(board, loc) and check(board, column) and check(board, box):
        return True
    else:
        return False

def create_board(data, loc):
    '''
    Creates dictionary: {board[loc]: [number, [possible numbers for square]]}
    '''
    board = {}
    for i in range(9):
        for x in range(9):
            board[loc[i][x]] = [data[i][x], [1,2,3,4,5,6,7,8,9], []]
            if data[i][x] != 0:
                board[loc[i][x]][1] = []
    return board

def solve(board, loc, column, box):
    def check_box(i, board, yco, xco):
        if yco < 3:
            b = xco // 3
        elif yco < 6:
            b = xco // 3 + 3
        elif yco < 9:
            b = xco // 3 + 6
        for z in box[b]:
            if i in board[z][1] and board[z][0] == 0:
                board[z][1].remove(i)
        return board

    while solved(board, loc, column, box) is not True:
        for i in range(1,10):
            for row in loc:
                yco = loc.index(row)
                for space in row:
                    xco = row.index(space)
                #Try add in numbers
                    if len(board[space][1]) == 1 and board[space][0] == 0:
                        board[space][0] = board[space][1][0]
                        board[space][1] = []
                #Use completed squares to eliminate alterior possibilities
                    elif board[space][0] == i:
                #Check row
                        for x in row:
                            if i in board[x][1] and board[x][0] == 0:
                                board[x][1].remove(i)
                #Check column
                        for y in column[xco]:
                            if i in board[y][1] and board[y][0] == 0:
                                board[y][1].remove(i)
                #Check boxes
                        check_box(i, board, yco, xco)
    output = []
    for i in range(9):
        output.append([board[x][0] for x in loc[i]])
    return output

board = create_board(data, loc)
answer = solve(board, loc, column, box)
print(answer)
