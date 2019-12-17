from collections import Counter

def solved(board):
    """Check whether a Sudoku puzzle is completed correctly where board is a dictionary"""
    def check_rows(board):
        x = 0
        while x < 9:
            for i in board[x]:
                if board[x].count(i) > 1:
                    return False
            x += 1
        return True

    def check_columns(board):
        x = 0
        while x < 9:
            column = [board[0][x], board[1][x], board[2][x], board[3][x], board[4][x], board[5][x], board[6][x], board[7][x], board[8][x]]
            for i in column:
                if column.count(i) > 1:
                    return False
            x += 1
        return True

    def check_boxes(board):
        y = 0
        while y < 9:
            x = 0
            while x < 9:
                box =   [board[y][x], board[y][x+1], board[y][x+2],
                        board[y+1][x], board[y+1][x+1], board[y+1][x+2],
                        board[y+2][x], board[y+2][x+1], board[y+2][x+2]]
                for i in box:
                    if box.count(i) > 1:
                        return False
                x += 3
            y += 3
        return True

    if check_rows(board) and check_columns(board) and check_boxes(board):
        return True
    else:
        return False


board = [   [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1], [7, 1, 3, 9, 2, 4, 8, 5, 6], [9, 6, 1, 5, 3, 7, 2, 8, 4], [2, 8, 7, 4, 1, 9, 6, 3, 5], [3, 4, 5, 2, 8, 6, 1, 7, 9]]

print(solved(board))




# test.assert_equals(done_or_not([[1, 3, 2, 5, 7, 9, 4, 6, 8]
#                         ,[4, 9, 8, 2, 6, 1, 3, 7, 5]
#                         ,[7, 5, 6, 3, 8, 4, 2, 1, 9]
#                         ,[6, 4, 3, 1, 5, 8, 7, 9, 2]
#                         ,[5, 2, 1, 7, 9, 3, 8, 4, 6]
#                         ,[9, 8, 7, 4, 2, 6, 5, 3, 1]
#                         ,[2, 1, 4, 9, 3, 5, 6, 8, 7]
#                         ,[3, 6, 5, 8, 1, 7, 9, 2, 4]
#                         ,[8, 7, 9, 6, 4, 2, 1, 5, 3]]), 'Finished!');
#
# test.assert_equals(done_or_not([[1, 3, 2, 5, 7, 9, 4, 6, 8]
#                         ,[4, 9, 8, 2, 6, 1, 3, 7, 5]
#                         ,[7, 5, 6, 3, 8, 4, 2, 1, 9]
#                         ,[6, 4, 3, 1, 5, 8, 7, 9, 2]
#                         ,[5, 2, 1, 7, 9, 3, 8, 4, 6]
#                         ,[9, 8, 7, 4, 2, 6, 5, 3, 1]
#                         ,[2, 1, 4, 9, 3, 5, 6, 8, 7]
#                         ,[3, 6, 5, 8, 1, 7, 9, 2, 4]
#                         ,[8, 7, 9, 6, 4, 2, 1, 3, 5]]), 'Try again!');
