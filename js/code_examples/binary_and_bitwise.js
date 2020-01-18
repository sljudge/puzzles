const toBinary = (num, output = [], float = [], numberOfFractionalPlaces = 10) => {

    const calcFloat = (frac, output, numberOfFractionalPlaces, i = 0) => {
        let temp = frac * 2
        if (temp === 1) {
            output.push(1)
            return output
        } else if (i === numberOfFractionalPlaces) {
            return output
        }
        output.push(Math.floor(temp))
        if (temp > 1) {
            return calcFloat(temp - 1, output, numberOfFractionalPlaces, ++i)
        } else {
            return calcFloat(temp, output, numberOfFractionalPlaces, ++i)
        }
    }

    //Check to see if there is a fraction
    if (num % 1 !== 0) {
        float = calcFloat(num % 1, float, numberOfFractionalPlaces)
        num = Math.floor(num)
    }

    if (num === 0) {
        // Check to see if output empty and add 0 to accomodate float
        output.length === 0 && output.push(0)
        // Reverse order to correct
        output = output.reverse().join('')
        if (float.length > 0) {
            return output + '.' + float.join('')
        } else {
            return output
        }
    }
    output.push(num % 2)
    return toBinary(Math.floor(num / 2), output, float)
}

// console.log('RESULT:', toBinary(193.001))
// console.log('RESULT:', toBinary(0.32))
// console.log('RESULT:', toBinary(2 / 3))
// console.log('RESULT:', toBinary(9 / 8))
// console.log('RESULT:', toBinary(1 / 5))

// console.log(23497 & 23095)

//Addition
const bitwiseAddition = (x, y) => {
    if (y === 0) {
        return x
    } else {
        return bitwiseAddition(x ^ y, (x & y) << 1)
    }
}

console.log('add: ', bitwiseAddition(15, 15))

const bitwiseSubtraction = (x, y) => {
    // Iterate till there 
    // is no carry 
    while (y != 0) {
        // borrow contains common  
        // set bits of y and unset 
        // bits of x 
        let borrow = (~x) & y;

        // Subtraction of bits of x  
        // and y where at least one 
        // of the bits is not set 
        x = x ^ y;

        // Borrow is shifted by one  
        // so that subtracting it from 
        // x gives the required sum 
        y = borrow << 1;
    }
    return x;
}

const bitwiseSubtractionRecursive = (x, y) => {
    if (y === 0) {
        return x
    } else {
        return (bitwiseSubtractionRecursive(x ^ y, (~x & y) << 1))
    }
}

// console.log(bitwiseSubtraction(4, 3))
// console.log(bitwiseSubtractionRecursive(4, 3))

const bitwiseMultiplication = (x, y, sum = 0) => {
    console.log('x: ', toBinary(x))
    console.log('y: ', toBinary(y))
    console.log('///////////////////')
    if (y === 0) {
        return sum
    }
    if (y & 1) {
        sum += x
        console.log('plus x: ', toBinary(x))
        console.log('sum: ', toBinary(sum))
    }
    y >>= 1
    x <<= 1
    return bitwiseMultiplication(x, y, sum)
}
// console.log(toBinary(bitwiseMultiplication(20, 22)))
console.log(toBinary(64))