import string

def build_shift_dict(shift):
        '''
        Creates a dictionary that can be used to apply a cipher to a letter.
        The dictionary maps every uppercase and lowercase letter to a
        character shifted down the alphabet by the input shift. The dictionary
        should have 52 keys of all the uppercase letters and all the lowercase
        letters only.        
        
        shift (integer): the amount by which to shift every letter of the 
        alphabet. 0 <= shift < 26

        Returns: a dictionary mapping a letter (string) to 
                 another letter (string). 
        '''
        encrypting_dict = {}
        for letter in string.ascii_lowercase:
            if (ord(letter) + shift) > 122:
                encrypting_dict[letter] = chr(ord(letter) + shift - 26)
            else:
                encrypting_dict[letter] = chr(ord(letter) + shift)
    
        for letter in string.ascii_uppercase:
            if (ord(letter) + shift) > 90:
                encrypting_dict[letter] = chr(ord(letter) + shift - 26)
            else:
                encrypting_dict[letter] = chr(ord(letter) + shift)
        
        return encrypting_dict

print(build_shift_dict(2))