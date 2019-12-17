function toWeirdCase(string){
    // Capitalise string on even indexes and minimise on odd: WeIrD StRiNg
    var out = []
    var innerCount = 0
    for(i=0; i<string.length; ++i){
        if(string[i] === ' '){
            out.push(' ');
            innerCount = 0;
            continue;
        }
        else if(innerCount===0){
            out.push(string[i].toUpperCase());
            innerCount += 1;
        }
        else if(innerCount%2===0){
            out.push(string[i] = string[i].toUpperCase());
            innerCount += 1;
        }
        else if(innerCount%2 != 0){
            out.push(string[i].toLowerCase());
            innerCount += 1;
        }
    };
    return out.join('')
}

console.log(toWeirdCase('This is a test'))


// Expected: 'ThIs Is A TeSt', instead got: 'ThIs iS A TeSt'
        //   01234567890123                 01234567890123