function sumFibs(num) {
    let a = 1;
    let b = 0;
    let temp;
    let sum = 0;
    while(b <= num){
        if( b % 2 != 0){ sum += b };
        temp = a;
        a = a + b;
        b = temp;
    }
    return sum;
}
  
  console.log(sumFibs(75026));

