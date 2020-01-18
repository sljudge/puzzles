function findLongestWordLength(str) {
  arr = str.split(' ');
  longest = arr[0];
  for(let i=0; i<arr.length; ++i){
    if(arr[i].length > longest.length){ longest = arr[i] };
  }
  return longest.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));