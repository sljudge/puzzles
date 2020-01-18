function destroyer() {
    return arguments[0].filter( x => ![...arguments].slice(1).includes(x));
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

  console.log([[1, 2, 3, 5, 1, 2, 3], 2, 3].slice(1));

  console.log([1,2,3,1,2,3].filter( x => [2,3].includes(x) == false));
  console.log([1, 2, 3, 5, 1, 2, 3].filter( x => [2,3].includes(x) == false));