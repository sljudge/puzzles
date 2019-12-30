function houseNumbersSum(inputArray) {
    //coding and coding..
    let sum = 0
    for (n of inputArray) {
        if (n === 0) {
            return sum
        }
        sum += n
    }

}