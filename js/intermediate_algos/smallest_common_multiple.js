function smallestCommons(arr) {
    //find prime factors
    function findPrimeFactors(num){
        let primes = [2];
        let primeFactors = [];
        while( num%2 === 0 ){
            num = num/2;
            primeFactors.push(2);
        };
        if(num === 1){ 
            return primeFactors
        }else{
            for(let i=2; i<=num; ++i){
                if(primes.every( x => !Number.isInteger(i/x)) && !primes.includes(i)){ primes.push(i) };
            };
            for(let i=0;;){
                if( num % primes[i] === 0 && num != primes[i]){
                    num = num / primes[i];
                    primeFactors.push(primes[i]);
                    continue;
                }else if(primes.includes(num)){
                    primeFactors.push(num);
                    return primeFactors;
                }else{
                    ++i;
                };
            };
        };
    };

    function countOccurences(arr){
        let counts = {};
        for(let i=0; i<arr.length; ++i){
            let num = arr[i];
            counts[num] = counts[num] ? counts[num] += 1 : 1;
        };
        return counts;
    }

    function mergeCounts(counts){
        let mergeCount = {};
        for( let record of counts ){
            for( let key of Object.keys(record)){
                mergeCount[key] = record[key] > mergeCount[key] ? record[key] : mergeCount[key] >= record[key] ? mergeCount[key] : record[key];
            }
        }
        return mergeCount;
    }
    
    arr = arr.sort((a,b) => a-b);
    let numbers = [];
    for(let i=arr[0]; i<=arr[1]; ++i){
        numbers.push(i);
    };
    console.log('numbers',numbers);
    let final = mergeCounts(numbers.map( x => findPrimeFactors(x) ).map( y => countOccurences(y)));
    console.log(final);
    let lcm = Object.keys(final).map( x => Math.pow( x, final[x] ) ).reduce( (total, x) => total*x );
    console.log(lcm);

    return lcm;
}
  
  
  smallestCommons([2,10]);