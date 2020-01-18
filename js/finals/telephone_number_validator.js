function telephoneCheck(str) {
    console.log(str);
    var regex = /^(1\s?)?(\(\d{3}\)|(\d{3}))[\s-]?(\d{3})[\s-]?(\d{4})$/;
    return regex.test(str);
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

