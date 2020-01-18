// function reverseString(str) {
//   out = [];
//   newStr = ''
//   for(i=str.length-1; i>=0; --i){
//     out.push(str[i]);
//   }
//   for(let i in out){
//     newStr += out[i];
//   }
//   return newStr;
// }

// console.log(reverseString("hello"));

function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello"));