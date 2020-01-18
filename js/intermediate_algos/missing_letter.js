function fearNotLetter(str) {
    for(let i=str.length - 1; i>0; --i){
        if(str.charCodeAt(i) - str.charCodeAt(i-1) != 1){
            return String.fromCharCode(str.charCodeAt(i) - 1);
        }
    }    
}
  
  console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("abcdefghjklmno"));
  console.log(fearNotLetter("stvwx"));
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));