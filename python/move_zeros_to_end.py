from collections import Counter

def move_zeros(array):
    """Move all zeros to end preserving the order of the other elements."""
    zero_count = [x for x in array if x is not False].count(0)
    output = [str(x) if type(x) == bool else x for x in array]
    for i in range(zero_count):
        output.remove(0)
        output.append(0)
    output = [False if x == 'False' else True if x == 'True' else x for x in output]
    return output

array = [8, -5, -6, -3, -1, 7, -10, True, 'b', 4, -4, -3, 5, 2, '0', -7, -5, 0, 0, 0, 0, 0, 0, 0]
print(move_zeros(array))

def move_zeros(arr):
    l = [i for i in arr if isinstance(i, bool) or i!=0]
    return l+[0]*(len(arr)-len(l))

# [8, -5, -6, -3, -1, 7, -10, 'True', 'b', 4, -4, -3, 5, 2, '0', -7, -5, 0, 0, 0, 0, 0, 0, 0] should equal
# [8, -5, -6, -3, -1, 7, -10, True, 'b', 4, -4, -3, 5, 2, '0', -7, -5, 0, 0, 0, 0, 0, 0, 0]
