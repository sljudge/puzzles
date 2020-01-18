function pairwise(arr, arg) {
    /*
    find element pairs whose sum equal the second argument arg and return the sum of their indices
    eg: pairwise([7, 9, 11, 13, 15], 20) returns 6
        7 + 13 = 20 → Indices 0 + 3 = 3
        9 + 11 = 20 → Indices 1 + 2 = 3
        3 + 3 = 6 → Return 6
    */
    let total = 0
    for (let i = 0, j = 1; i < arr.length - 1;) {
        console.log(i, 'i: ', arr[i])
        console.log(j, 'j: ', arr[j])

        if (arr[i] === null) {
            i++
            j = i + 1
            console.log(arr)
            console.log('//////////////////')
            continue
        }

        if (arr[i] + arr[j] === arg) {
            arr.splice(i, 1, null)
            arr.splice(j, 1, null)
            total += i + j
            i++
            j = i + 1
        } else if (j === arr.length - 1) {
            i++
            j = i + 1
        }
        else {
            j++
        }
        console.log('total: ', total)
        console.log(arr)
        console.log('/////////////////////')
    }
    return total
}

// console.log(pairwise([7, 9, 11, 13, 15], 20))
// console.log(pairwise([1, 1, 2], 3))
// console.log(pairwise([1, 4, 2, 3, 0, 5], 7))
console.log(pairwise([1, 3, 2, 4], 4))