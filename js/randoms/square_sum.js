function squareSum(numbers){
    // squares elements of an array and produces the sum
    reducer = (accumulator, currentValue) => accumulator + currentValue;
    return numbers.map(number => number**2).reduce(reducer, 0)
}

console.log(squareSum([1,2,2]))


function squareSumExample(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }