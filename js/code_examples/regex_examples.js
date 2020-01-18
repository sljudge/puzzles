let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle|star/gi; // g - pattern ; i - case insensitive
let result = twinkleStar.match(starRegex); 
console.log(result);

////////////////////////////////////////

let exampleStr = "Let's have fun in the sun but don't run - it's too hot!";
let unRegex = /.un/g; // . - wild card
let result2 = exampleStr.match(unRegex);
// console.log(result2);

/////////////////////////////////////////

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // creates a character class
let result3 = quoteSample.match(vowelRegex);
// console.log(result3);

////////////////////////////////////////////

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // matches a -through- z
let result4 = quoteSample1.match(alphabetRegex); 
// console.log(result4);

///////////////////////////////////////////

let quoteSample2 = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // ^ negates -> matches all characters that are not vowels or numbers
let result5 = quoteSample2.match(myRegex);
// console.log(result5);

//////////////////////////////////////////

let difficultSpelling = "Mississippi, Sasha, ssssssnake";
let myRegex2 = /s+/gi; // + matches consecutive occurences of at least 1 
let result6 = difficultSpelling.match(myRegex2);
// console.log(result6);

//////////////////////////////////////////////
let chewieQuote = "A cat walked into an AA meeting: 'Aaaaaaah', Aaron said";
let chewieRegex = /Aa*/g; // * occurs 0 or more times
let result7 = chewieQuote.match(chewieRegex);
// console.log(result7);

/////////////////////////////////////////////
let text = "Titanic is sinking";
let myRegex3 = /T[a-z]*?i/; // T to i -> without ? is greedy (largest possible match)
let result8 = text.match(myRegex3);
// console.log(result8);

//////////////////////////////////////////////

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // ^ if match is at start of string
let result9 = calRegex.test(rickyAndCal);
// console.log(result9);

/////////////////////////////////////////////////

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // $ if a match is at the end of a string
let result10 = lastRegex.test(caboose);
// console.log(result10);

////////////////////////////////////////////////////

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/; // => 'a' appearing 3-5 times in string 'ah
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

///////////////////////////////////////////////////

let favWord = "favorite";
let favRegex = /favou?rite/; // ? => letter is optional
let result11 = favRegex.test(favWord);

//////////////////////////////////////////////////////

let repeatStr = "regex regex regex";
let repeatRegex = /(\w+)\s\1/; // \1 specifies capture group number then increments as more groups are defined
repeatRegex.test(repeatStr); // Returns true
console.log(repeatStr.match(repeatRegex)); // Returns ["regex regex", "regex"]

/////////////////////////////////////////////////////////

// example crowd gathering
let crowd = 'P1CP2PCC3P4P5P6CCCP7PC8P9';

let reCriminals = /C+/g; 

let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);

////////////////////////////////////////////////////////

// username checker
/*1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

2) Username letters can be lowercase and uppercase.

3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; // \w for letters and numbers (\W = [^\w]) and \d for numbers
let result12 = userCheck.test(username);
// console.log(result12);

///////////////////////////////////////////////////////////////////////////

//check for mulitple whitespace
let sample = "Whitespace is important in separating  words";
let countWhiteSpace = /\s{2,}/g; // \s = [\r\t\f\n\v]
let result13 = sample.match(countWhiteSpace);
// console.log(result13);

///////////////////////////////////////////////////////////////

//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "astron91aut";
let pwRegex = /(?=\w{5,})(?=.*\d{2}.*)/; // ?= looks ahead to make sure search pattern is there and ?! looks ahead to check pattern is not there
let result14 = pwRegex.test(sampleWord);
// console.log(result14);

/////////////////////////////////////////////////////////////////

//Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.

let repeatNum = "42 42 42";
let reRegex = /(\d+)(\s)\1\2\1/; //
let result15 = reRegex.test(repeatNum);
// console.log(result15);

/////////////////////////////////////////////////////////////////////

let hello = "   Hello, World!  ";
let wsRegex = /^\s*|\s*$/; // .trim()
let result16 = hello.replace(wsRegex, '');
// console.log(result16);

///////////////////////////////////////////////////////////////////////

function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(/\W|_/).join('-');
  }
