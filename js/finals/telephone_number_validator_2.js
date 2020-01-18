function telephoneCheck(str) {
    console.log(str);
    //check for negation
    if(str[0] === '-'){
        return false;
    }
    // Get rid of - and spaces
    str = str.replace(/[-\s]/g, '');
    //Check to see if there are brackets
    if( /[\(\)]/g.test(str) ){
        //Are brackets opened/closed and in correct position?
        str = /\([0-9]{3}\)/g.test(str) ? str.replace(/[\(\)]/g, '') : false;
    }
    console.log(str);
    //Check length and first number == 1 if length 11
    if( str.length === 10 || str.length === 11 && str[0] == 1){
        return true;
    }else{
        return false;
    }
  }
  

console.log(telephoneCheck("1 555-555-5555")); //should return true.
console.log(telephoneCheck("1 (555) 555-5555")); //should return true.
console.log(telephoneCheck("5555555555")); //should return true.
console.log(telephoneCheck("555-555-5555")); //should return true.
console.log(telephoneCheck("(555)555-5555")); //should return true.
console.log(telephoneCheck("1(555)555-5555")); //should return true.
console.log(telephoneCheck("555-5555")); //should return false.
console.log(telephoneCheck("5555555")); //should return false.
console.log(telephoneCheck("1 555)555-5555")); //should return false.
console.log(telephoneCheck("2 (757) 622-7382"))// should return false.
console.log(telephoneCheck("0 (757) 622-7382"))// should return false.
console.log(telephoneCheck("(275)76227382")) // should return false.
console.log(telephoneCheck("-1 (757) 622-7382")) // should return false

