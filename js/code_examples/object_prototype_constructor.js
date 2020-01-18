// function Dog(name) {
//     this.name = name; 
//   }
  
//   // Modify the code below this line
//   Dog.prototype = {
//     constructor: Dog,
//     numLegs: 2, 
//     eat: function() {
//       console.log("nom nom nom"); 
//     }, 
//     describe: function() {
//       console.log("My name is " + this.name); 
//     }
//   };

//   let spaniel = Object.create(Dog.prototype);
//   spaniel.name = 'Jet';

//   console.log(spaniel);
//   console.log(spaniel.describe());

////////////////////////////////////////////////////////////////////////////////////////////

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Dog() { 
// }

// // Add your code below this line
// Dog2.prototype = Object.create(Animal.prototype);


// let beagle = new Dog();
// beagle.eat();  // Should print "nom nom nom"

////////////////////////////////////////////////////////////////////////

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog3.prototype = Object.create(Animal.prototype);
Dog3.prototype.constructor = Dog;
Dog3.prototype.bark = () => console.log('Woof!');

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"