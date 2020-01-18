function convertToRoman(num) {
    const table = {
        1 : 'I',
        4 : 'IV',
        5 : 'V',
        9 : 'IX',
        10 : 'X',
        40 : 'XL',
        50 : 'L',
        90 : 'XC',
        100 : 'C',
        400 : 'CD',
        500 : 'D',
        900 : 'CM',
        1000 : 'M',
    };
    var out = '';
    var i = 12;
    while(num > 0){
        ref = Object.keys(table)[i];
        console.log(num, ref);
        if( ref <= num ){
            out += table[ref];
            num -= ref;
            continue;
        }
        --i;
    }
    return out;
}
   
   console.log(convertToRoman(649));