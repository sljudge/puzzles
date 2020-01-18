function truncateString(str, num) {
  return num < str.length ? str.slice(0, num) + '...' : str;
}

input = "A-tisket a-tasket A green and yellow basket";
console.log(truncateString(input, input.length));