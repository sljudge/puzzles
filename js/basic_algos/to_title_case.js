 function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)[a-z]/g, x => x.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));

