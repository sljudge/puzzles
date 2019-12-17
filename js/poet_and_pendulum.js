const pendulum = (arr) => {
    /*
    [6, 6, 8 ,5 ,10] ==> [10, 6, 5, 6, 8]
    [-9, -2, -10, -6] ==> [-6, -10, -9, -2]
    [11, -16, -18, 13, -11, -12, 3, 18 ] ==> [13, 3, -12, -18, -16, -11, 11, 18]

    --Smallest item goes to the center
    --Next biggest goes to the right
    --Next biggest to the left
    */

    let firstHalf = []
    let secondHalf = []

    if( arr.length % 2 === 0){
        firstHalf = arr.slice(0, arr.length/2);
        secondHalf = arr.slice(arr.length/2, arr.length);
        console.log(firstHalf)
        console.log(secondHalf)
    }else{
        firstHalf = arr.slice(0, arr.length/2+1);
        secondHalf = arr.slice(arr.length/2+1, arr.length);
        console.log(firstHalf)
        console.log(secondHalf)
    }

    const check = (firstHalf, secondHalf) => {
        console.log(firstHalf.sort( (a,b) => {a+b} ));
        console.log(secondHalf.sort( (a,b) => {a-b} ));
        if( firstHalf.sort( (a,b) => {a+b} ) === arr.slice(0, arr.length/2) ){
            console.log('first half correct')
            if( secondHalf.sort( (a,b) => {a-b} ) === arr.slice(arr.length/2, arr.length) ){
                console.log('second half correct')
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    return check(firstHalf, secondHalf);
}

// console.log(pendulum([6,6,8,5,10]))
// console.log(pendulum([-9, -2, -10, -6]))
console.log(pendulum([10, 6, 5, 6, 8]))