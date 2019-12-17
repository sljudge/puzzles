function persistence(number){
    /*
    Takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
    eg. persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
    */
   count = 0
   sum = 1
   number = number.toString()
   if(number.length === 1){
       return count
   };
   for(i=0; i<number.length; ++i){
       sum = sum*number[i]
   };
   count += 1;
   while(sum.toString().length > 1){
       persistence(sum);
       count += 1;
   };
   return count   
}

console.log(persistence(999))

// describe('Initial Tests', function () {
//     Test.assertEquals(persistence(39),3);
//     Test.assertEquals(persistence(4),0);
//     Test.assertEquals(persistence(25),2);
//     Test.assertEquals(persistence(999),4);
//   });
