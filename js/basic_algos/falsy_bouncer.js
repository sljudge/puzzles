function bouncer(arr) {
    // reject all falsy values
    return arr.filter( x => !!x != false);
  }
  
  console.log(bouncer([7, "ate", "", false, 9, undefined, NaN, null]));
//   console.log(bouncer([false, null, 0, NaN, undefined, ""]));
//   console.log(bouncer([1, null, NaN, 2, undefined]));


  // running tests
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
// tests completed