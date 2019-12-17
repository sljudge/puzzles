def alphanumeric(string):
    """
    Check String is uppercase/lowercase latin letters and digits 0-9.
    No white spaces/underscores.
    String is not nil.
    """
    numbers = []
    for i in string:
        numbers.append(ord(i))

    print(numbers)

    for x in numbers:
        if x in range(48, 58) or x in range(65, 91) or x in range(97, 123):
            continue
        else:
            return False
    return True

string = 'Zweet009'
print(alphanumeric(string))
