function mutation(arr) {
    toCheck = arr[0].toLowerCase();
    mutt = arr[1].toLowerCase();
    for(letter in mutt){
        if(toCheck.includes(mutt[letter]) === false){return false};
    }
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));
  console.log(mutation(["Alien", "line"]));

