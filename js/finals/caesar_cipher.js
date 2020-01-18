function rot13(str) { //
    var sentence = str.split(' ');
    var out = '';
    for( let word of sentence){
        for( let letter in word ){
            let codedLetter = word.charCodeAt(letter);
            if( 64 < codedLetter && codedLetter < 78 ){ 
                out += String.fromCharCode(codedLetter+13);
                console.log(1, codedLetter, String.fromCharCode(codedLetter + 13));
            }else if( 77 < codedLetter && codedLetter < 91 ){
                out += String.fromCharCode(codedLetter-13);
                console.log(2, codedLetter, String.fromCharCode(codedLetter - 13));
            }else{
                out += word[letter];
            }
        };
        out += ' ';
    }
    
    return out.trim();
  }

  function rerot13(str) { // LBH QVQ VG!
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
  }
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR YBIR?"));