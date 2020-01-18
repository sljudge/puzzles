var Person = function(firstAndLast) {
    let fullName;
    let firstName;
    let lastName;

    this.setFullName = function(firstAndLast){
        fullName = firstAndLast;
        firstName = firstAndLast.split(' ')[0];
        lastName = firstAndLast.split(' ')[1];
    }
    this.setFirstName = function(first){
        firstName = first;
        this.setFullName(firstName + ' ' + lastName);
    }
    this.setLastName = function(last){
        lastName = last;
        this.setFullName(firstName + ' ' + lastName);
    }
    this.getFirstName = function(){
        return firstName;
    }
    this.getLastName = function(){
        return lastName;
    }
    this.getFullName = function() {
        return fullName;
    }
    return this.setFullName(firstAndLast);
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  bob.setFirstName('Diana');
  bob.setLastName('Ferguson');
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  console.log(bob.getFullName());
  bob.setFullName('Haskell Curry');
  console.log(bob.getFullName());
  console.log(bob.getLastName());

  console.log(Object.keys(bob));
