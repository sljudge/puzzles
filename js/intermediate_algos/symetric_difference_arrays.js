function diffArray(arr1, arr2) {
    console.log(arr1.filter( x => arr2.includes(x) == false));
    console.log(arr2.filter ( x=> arr1.includes(x) == false ));
    return arr1.filter( x => arr2.includes(x) == false).concat(arr2.filter ( x=> arr1.includes(x) == false ));
  }

function diffArray2(arr1, arr2) {
return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
