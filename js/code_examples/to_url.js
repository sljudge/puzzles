// the global variable
var globalTitle = "Winter Is     Coming";

// Add your code below this line
function urlSlug(title) {
  return title.toLowerCase().split(/\W/).filter( x => x!=false).join('-');
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);