function translatePigLatin(str) {
    let regex = /^[b-df-hj-np-tv-z]+/
    let swap = str.match(regex) + 'ay';
    if(str.match(regex)){
        return str.replace(regex, '') + swap;
    }else{
        return str + 'way';
    }
  }
  
  console.log(translatePigLatin("consonant"));
  console.log(translatePigLatin("thought"));
  console.log(translatePigLatin("school"));
  console.log(translatePigLatin("eight"));
  console.log(translatePigLatin("california"));