MORSE_CODE = {'.-...': '&', '--..--': ',', '....-': '4', '.....': '5', '...---...': 'SOS', '-...': 'B', '-..-': 'X', '.-.': 'R', '.--': 'W', '..---': '2', '.-': 'A', '..': 'I', '..-.': 'F', '.': 'E', '.-..': 'L', '...': 'S', '..-': 'U', '..--..': '?', '.----': '1', '-.-': 'K', '-..': 'D', '-....': '6', '-...-': '=', '---': 'O', '.--.': 'P', '.-.-.-': '.', '--': 'M', '-.': 'N', '....': 'H', '.----.': "'", '...-': 'V', '--...': '7', '-.-.-.': ';', '-....-': '-', '..--.-': '_', '-.--.-': ')', '-.-.--': '!', '--.': 'G', '--.-': 'Q', '--..': 'Z', '-..-.': '/', '.-.-.': '+', '-.-.': 'C', '---...': ':', '-.--': 'Y', '-': 'T', '.--.-.': '@', '...-..-': '$', '.---': 'J', '-----': '0', '----.': '9', '.-..-.': '"', '-.--.': '(', '---..': '8', '...--': '3'}

def decodeMorse(morseCode):
    print(morseCode)
    morseCode = morseCode.split('   ').strip()
    for word in range(len(morseCode)):
        morseCode[word] = morseCode[word].split(' ')
        for letter in range(len(morseCode[word])):
            print(morseCode[word][letter])
            morseCode[word][letter] = MORSE_CODE[morseCode[word][letter]]
            print(morseCode)
        morseCode[word] = ''.join(morseCode[word])
    morseCode = ' '.join(morseCode)
    print(morseCode)
    # ToDo: Accept dots, dashes and spaces, return human-readable message
    return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '')

morseCode = '.... . -.--   .--- ..- -.. .'
print(decodeMorse(morseCode))
