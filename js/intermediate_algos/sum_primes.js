function sumPrimes(num) {
    let primes = [2];
    for(let i=2; i<=num; ++i){
        if(primes.every( x => !Number.isInteger(i/x)) && !primes.includes(i)){ 
            primes.push(i) 
        };
    }
    console.log(primes)
    return primes.reduce( (total, x) => total + x);
}
  
  console.log(sumPrimes(127));