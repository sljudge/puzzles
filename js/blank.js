var name = "Zorro";
 
function displayName() {
   console.log(name);
}
 
displayName();
 
function displayName1(name) {
   console.log(name);
}
 
displayName1("Indiana Jones");
 
// local scope again
function displayName2() {
   var name = "Batman";
   console.log(name);
}
 
displayName2();