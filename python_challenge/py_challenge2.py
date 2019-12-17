message ="g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."

def translate(letter):
    """
    K -> M ; O -> Q ; E -> G
    'everyone thinks twice before solving this.'
    """
    if letter.isalpha() and ord(letter) < 121:
        letter = chr(ord(letter) + 2)
    elif letter.isalpha():
        letter = chr(ord(letter) - 24)
    return letter

message = list('map')
print(''.join(list(map(translate, message))))

# Also string.maketrans()
