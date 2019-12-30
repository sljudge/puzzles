function sumDigPow(a, b) {
    // explores numbers ranging from a - b and returns numbers that fit criteria:
    //eg. 89 = 8^1 + 9^2 ---- 135 = 1^1 + 3^2 + 5^3
    function* range(start, end) {
        for (let i = start; i <= end; i++) {
            yield i;
        }
    }
    ans = [];
    for (let i of range(a, b)) {
        sum = 0;
        elem = i.toString();
        for (let x = 0; x < elem.length; ++x) {
            sum += Math.pow(elem[x], (x + 1));
        }
        if (sum == i) {
            ans.push(i);
        }
    }
    return ans
}

// function sumDigPow(a, b) {
//     var ans = [];
//     while (a <= b) {
//         if (a.toString().split('').reduce((x, y, i) => x + +y ** (i + 1), 0) == a)
//             ans.push(a);
//         a++;
//     }
//     return ans;
// }


console.log(sumDigPow(1, 100))