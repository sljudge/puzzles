// function factorialize(num) {
//   let total = 1;
//   while(num>0){
//     total *= num;
//     num -= 1;
//   }
//   return total;
// }

function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

console.log(factorialize(5));