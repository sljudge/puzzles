function frankenSplice(arr1, arr2, n) {
    // insert arr 1 into arr 2 at index n
    let start = arr2.slice(0, n);
    let end = arr2.slice(n);
    console.log(start, end);
    return [...start, ...arr1, ...end];
  }
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6, 7, 8, 9], 2));

//  arr = [4,5,6];
//  arr.splice(1, 0, ...[1,2,3]);
//  console.log(arr);