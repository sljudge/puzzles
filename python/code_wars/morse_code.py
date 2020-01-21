class Morse:

	def __init__(self, morseToEnglish, textToTranslate):
		#
		# Some work here; return type and arguments should be according to the problem's requirements
		#
		self.dict = {'a':'.-', 'b':'-...', 'c':'-.-.', 'd':'-..', 'e':'.', 'f':'..-.', 'g':'--.', 'h':'....', 'i':'..', 'j':'.---', 'k':'-.-', 'l':'.-..', 'm':'--', 'n':'-.', 'o':'---', 'p':'.--.', 'q':'--.-', 'r':'.-.', 's':'...', 't':'-', 'u':'..-', 'v':'...-', 'w':'.--', 'x':'-..-', 'y':'-.--', 'z':'--..', 1:'.----', 2:'..---', 3:'...--', 4:'....-', 5:'.....', 6:'-....', 7:'--...', 8:'---..', 9:'----.', 0:'-----'}
		self.text = textToTranslate
		self.morse = morseToEnglish

	def decode(self):
		if self.morse:
			output = []
			text = self.text.split('   ')
			print(text)
			for word in text:
				word = word.split(' ')
				print(word)
				for letter in word:
					for key in self.dict.keys():
						if letter == self.dict[key]:
							output.append(key)
							print(output)
				output.append(' ')
			return ''.join(output)
		elif not self.morse:
			text = self.text.lower()
			text = text.split()
			output=[]
			for word in text:
				for letter in word:
					if letter.isalnum():
						output.append(self.dict[letter])
						output.append(' ')
				output.append('   ')
			return  ''.join(output)


text = '- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-'
# text = 'the wizard quickly jinxed the gnomes before they vaporized'

message = Morse(True, text)
print(message.decode())

# t h e   w i z a r d   q u i c k l y   j i n x e d   t h e   g n o m e s   b e f o r e   t h e y   v a p o r i z e d
