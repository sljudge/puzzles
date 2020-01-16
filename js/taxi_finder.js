function minimum_number_of_taxis(requests) {
    /*
     Two customers, overlapping schedule. Two taxis needed.
        # First customer wants to be picked up 1 and dropped off 4.
        # Second customer watns to be picked up 2 and dropped off 6.
        requests = [(1, 4), (2, 6)]
        min_num_taxis(requests) # => 2

    Two customers, no overlap in schedule. Only one taxi needed.
        # First customer wants to be picked up 1 and dropped off 4.
        # Second customer watns to be picked up 5 and dropped off 9.
        requests = [(1, 4), (5, 9)]
        min_num_taxis(requests) # => 1
    */


}


const randInt = (max) => {
    return Math.ceil(Math.random() * Math.floor(max));
}


const four_reqs = [[1, 4], [2, 9], [3, 6], [5, 8]]
// console.log(minimum_number_of_taxis(four_reqs))

let arr = []
for (let i = 0; i < 20; i++) {
    let dropOff = randInt(24)
    let pickUp = randInt(dropOff - 1)
    arr.push([pickUp, dropOff])
}
// console.log(arr)
console.log(minimum_number_of_taxis(arr))
