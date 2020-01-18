// let isCuteMixin = function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// };
// let singMixin = function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// };

let funModule = (function () {
    return{
      isCuteMixin: (obj) => obj.isCute = () => true,
      singMixin: (obj) => obj.sing = () => console.log('Singing to an awesome tune') 
    }
  }) ();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let motionModule = (function () {
return {
    glideMixin: function (obj) {
    obj.glide = function() {
        console.log("Gliding on the water");
    };
    },
    flyMixin: function(obj) {
    obj.fly = function() {
        console.log("Flying, wooosh!");
    };
    }
}
}) (); // The two parentheses cause the function to be immediately invoked