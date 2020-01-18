function whatIsInAName(collection, source) {
    return collection.filter( x => Object.keys(source).every( y => source[y] == x[y] ) );
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { 'apple': 1, 'bat':2}))

  
