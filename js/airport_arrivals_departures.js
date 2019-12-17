var flapDisplay = function(lines, rotors) {

    // const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789'

    const alphabet = { 
        A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25, 
        ' ': 26, '?': 27, '!': 28, '@': 29, '#': 30, '&': 31, '(': 32, ')': 33, '|': 34, '<': 35, '>': 36, '.': 37, ':': 38, '=': 39, '-': 40, '+': 41, '*': 42, '/': 43, 
        '0': 44, '1': 45, '2': 46, '3': 47, '4': 48, '5': 49, '6': 50, '7': 51, '8': 52, '9': 53, 
    }

    const calcRotations = (arr) => {
        return arr.reduce((a,b) => a + b);
    }

    const shiftWord = (word, rotor, alphabet) => {
        let out = '';
        let rotors = [];
        for(i=0; i<word.length; i++){
            //cycle through each letter of word
            let letter = word[i];
            //add rotations to be totalled
            rotors.push(rotor[i]);
            //add index of current character to total number of rotations and modulus 54 to get value
            let charCode = (alphabet[letter] + calcRotations(rotors)) % 54;
            //reverse look up key from value 
            let char = Object.keys(alphabet).find( key => alphabet[key] === charCode);
            
            out += char;
        }
        return out;
    }
    //TEST
    // let cat = shiftWord('CAT', [1,13,27], alphabet); console.log(cat);
    // let world = shiftWord('HELLO ', [15,49,50,48,43,13], alphabet); console.log(world);
    // let code = shiftWord('CODE', [20,20,28,0], alphabet); console.log(code);
    
    //Return multiple words in array
    let out = [];
    for(y=0; y<lines.length; y++){
        out.push(shiftWord(lines[y], rotors[y], alphabet));
    }
    return out

}

console.log(flapDisplay(['CAT', 'HELLO ', 'CODE'], [ [1, 13, 27], [15,49,50,48,43,13], [20,20,28,0] ]))

// H    7       15         22  W            15                  +7              =22
// E    4       49         14  O            15+49 =     64      + 4 = 68     - 54 = 14
// L    11      50         17  R            64+50 =     114     +11= 125     -108 = 17
// L    11     48           11  L           114+48 =    162     +11= 173    -162 = 11
// O    14      43        3   D             162+43 =    205     +14 =219    -216 = 3        **** 244 - 216 = 28 !!!
//      26      13        28  !             205+13 =    218     +26 = 244   -270 =  -26

// C    2       1          3    D           1                   +2   =           = 3
// A    0       13         14   O           1+13 =      14      +0   =14           =14
// T    19      27         6    G           14+27 =     41      +19  = 60       -54 = 6
