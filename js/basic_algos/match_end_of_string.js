function confirmEnding(str, target) {
  console.log(str.slice(-target.length));
  if(str.slice(-target.length) == target){return true} else {return false};
}

console.log(confirmEnding("Bastian", "an"));