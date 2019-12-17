function isIsogram(str){
    //determines if string as no repeating letters (consecutive or not) ignoring case
    letters = []
    for(var i=0; i < str.length; ++i){
        if (letters.includes(str[i].toLowerCase())){
            console.log('Sting is not an isogram')
            return false;
        }
        else{
            letters.push(str[i].toLowerCase())
        }
    }
    console.log('String is an isogram')
    return true
}

isIsogram('heLlo')