function repeatStringNumTimes(str, num) {
  // return num > 0 ? str.repeat(num) : '';
  return num < 0 ? '' : num === 1 ? str : str + repeatStringNumTimes(str, num-1);

}

console.log(repeatStringNumTimes("abc", 5));