function sequenceClassifier(arr) {
    /*
    0   unordered               [3,5,8,1,14,3]
    1   strictly increasing     [3,5,8,9,14,23]
    2   not decreasing          [3,5,8,8,14,14]
    3   strictly decreasing     [14,9,8,5,3,1]
    4   not increasing          [14,14,8,8,5,3]
    5   constant                [8,8,8,8,8,8]
    */
    let type = 0
    for (let i = 0, j = 1; j < arr.length; i++ , j++) {
        if (arr[i] < arr[j] && type !== 2) {
            if (type === 3 || type === 4) {
                return 0
            } else if (type === 5) {
                return 2
            }
            type = 1
        } else if (arr[i] > arr[j] && type !== 4) {
            if (type === 1 || type === 2) {
                return 0
            } else if (type === 5) {
                return 4
            }
            type = 3
        } else if (type === 1 && arr[i] === arr[j]) {
            type = 2
        } else if (type === 3 && arr[i] === arr[j]) {
            type = 4
        } else if (type === 0 && arr[i] === arr[j]) {
            type = 5
        }
        console.log('[', arr[i], arr[j], ']     type = ', type)
    }
    return type
}

console.log(sequenceClassifier([3, 5, 8, 1, 14, 3]))
console.log(sequenceClassifier([3, 5, 8, 9, 14, 23]))
console.log(sequenceClassifier([3, 5, 8, 8, 14, 14]))
console.log(sequenceClassifier([14, 9, 8, 5, 3, 1]))
console.log(sequenceClassifier([14, 14, 8, 8, 5, 3]))
console.log(sequenceClassifier([8, 8, 8, 8, 8, 8]))
console.log(sequenceClassifier([8, 8, 8, 8, 8, 9]))
