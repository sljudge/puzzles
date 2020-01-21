function numWays(n, i = 2, a = 1, b = 1) {
    /*
        For staircase of length N find the number of ways to the top.
        You can take either one step or two steps at a time
    */
    if (n === 0 || n === 1) {
        return 1
    }
    if (i === n) {
        return a + b
    } else {
        let temp = a
        a = b
        b += temp
        return numWays(n, ++i, a, b)
    }

    // -->> LESS SPACE EFFICIENT:
    // vvvvvvvvvvvvvvvvvvvvvvvvvv
    // let arr = [1, 1]
    // for (let i = 2; i <= n; i++) {
    //     arr[i] = arr[i - 1] + arr[i - 2]
    // }
    // return arr[n]
}
console.log(numWays(5))
console.log(numWays(6))