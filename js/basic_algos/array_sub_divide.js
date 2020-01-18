function chunkArrayInGroups(arr, size) {
    let out = [];
    while( arr.length > 0){;
        out.push( arr.splice(0,size) );
    }
    return out;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

//   let arr = ['a', 'b', 'c', 'd']
//   let out = []
//   for(i=0; i<4; ++i){
//       out.push(arr.splice(0,2));
//       console.log(arr);
//       console.log('OUT', out);
//   }