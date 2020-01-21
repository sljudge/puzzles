def largest_odd_times_occurring(L):
    """ Assumes L is a non-empty list of ints
        Returns the largest element of L that occurs an odd number 
        of times in L. If no such element exists, returns None """

    numbers = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0}
    
    odd_occurring_numbers = {}
    
    for n in L:
        numbers[n] += 1
    
    for number, count in numbers.items():
        if count % 2 != 0:
            odd_occurring_numbers[number] = count
    
    if odd_occurring_numbers:
        highest_count = max(odd_occurring_numbers.values())
        for number, count in odd_occurring_numbers.items():
            if count == highest_count:
                print (odd_occurring_numbers)
                return (number)
    else:
        return None
    
L = [2,2,4,4,3,3,3,3]
print (largest_odd_times(L))
        

