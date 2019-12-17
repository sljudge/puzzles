data     = [ [5,3,0,0,7,0,0,0,0],
          [6,0,0,1,9,5,0,0,0],
          [0,9,8,0,0,0,0,6,0],
          [8,0,0,0,6,0,0,0,3],
          [4,0,0,8,0,3,0,0,1],
          [7,0,0,0,2,0,0,0,6],
          [0,6,0,0,0,0,2,8,0],
          [0,0,0,4,1,9,0,0,5],
          [0,0,0,0,8,0,0,7,9]]

class Board(object):
    def __init__(self, data):
        self.board = data

    def get_board(self):
        return self.board

    def find_boxes(self):
        boxes = []
        board = self.board
        y = 0
        while y < 9:
            x = 0
            while x < 9:
                box =   [board[y][x], board[y][x+1], board[y][x+2],
                        board[y+1][x], board[y+1][x+1], board[y+1][x+2],
                        board[y+2][x], board[y+2][x+1], board[y+2][x+2]]
                x += 3
                boxes.append(box)
            y += 3
        return boxes

    def find_columns(self, col):
        x = 0
        column = []
        board = self.board
        for x in range(9):
            column.append(board[x][col])
        columns = [one, two, three, four, five, six, seven, eight, nine]
        return columns

    def find_rows(self, row):
        board = self.board
        a = board[0]
        b = board[1]
        c = board[2]
        d = board[3]
        e = board[4]
        f = board[5]
        g = board[6]
        h = board[7]
        i = board[8]
        rows = [a, b, c, d, e, f, g, h, i]
        return rows

class
