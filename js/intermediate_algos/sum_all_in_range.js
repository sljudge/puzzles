// function sumAll(arr) {
//     arr.sort((a,b) => a > b);
//     let total = 0;
//     for(let i=arr[0]; i<=arr[1]; ++i){
//         total += i;
//         console.log(total);
//     }
//     return total;
//   }

  function sumAll(arr) {
    let total = 0;
    for(let i=Math.min(...arr); i<=Math.max(...arr); ++i){
        total += i;
    }
    return total;
  }
  
  console.log(sumAll([4,1]));

