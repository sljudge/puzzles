function validBraces(braces) {
    // Checkes if braces () [] {} are correct: (} => False ; {([])} => True ; [({})](] => False
    // All input strings are nonempty and will only consist of parentheses, brackets and curly braces: ()[]{}.
    var matches = { '(': ')', '{': '}', '[': ']' };
    var stack = [];
    var currentChar;

    for (var i = 0; i < braces.length; i++) {
        currentChar = braces[i];
        // console.log('stack' + stack);
        // console.log(currentChar);

        if (matches[currentChar]) { // opening braces
            stack.push(currentChar);
        } else { // closing braces
            if (currentChar !== matches[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0; // any unclosed braces left?
}
let braces
braces = '(({]}]}))[]';
console.log(validBraces(braces));
braces = "(){}[]"   //=>  True
console.log(validBraces(braces));
braces = "([{}])"   //=>  True
console.log(validBraces(braces));
braces = "(}"       //=>  False
console.log(validBraces(braces));
braces = "[(])"     //=>  False
console.log(validBraces(braces));
braces = "[({})](]" //=>  False
console.log(validBraces(braces));