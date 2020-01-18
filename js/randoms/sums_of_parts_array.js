function sumOfParts(arr){
    /*[0, 1, 3, 6, 10] => [20, 20, 19, 16, 10, 0]
    ls = [0, 1, 3, 6, 10]
    ls = [1, 3, 6, 10]
    ls = [3, 6, 10]
    ls = [6, 10]
    ls = [10]
    ls = [] 
    */
    ans = [];
    while(arr.length>0){
        sum = arr.reduce( (a,b) => {return a+b} );
        ans.push(sum);
        arr.shift();
    }
    ans.push(0)
    return ans
}

console.log(sumOfParts([0,1,3,6,10]))

