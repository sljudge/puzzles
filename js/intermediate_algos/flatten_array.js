function steamrollArray(arr) {
    while( arr.findIndex( x => Array.isArray(x)) > -1 ){
        let index = arr.findIndex( x => Array.isArray(x));
        arr.splice(index, 1, ...arr[index]);
    };
    return arr;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));

  