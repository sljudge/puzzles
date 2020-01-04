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
        output.length === 0 && output.push(0)
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
const binaryAddition = (a, b) => {
    const aLength = a.toString().length
    const bLength = b.toString().length
    const length = aLength > bLength ? aLength : bLength

    let output = []
    for (let i = length - 1; i >= 0; i--) {
        console.log(i)
    }
    console.log('output: ', output)
}

console.log(binaryAddition(101110, 110001))