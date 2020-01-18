function songDecoder(song){
    //takes the wub out of dubstep and returns the original song
    //eg. "WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB" =>  WE ARE THE CHAMPIONS MY FRIEND
    var out = song.replace(/wub/gi, ' ');
    while(out[0] === ' '){
        out = out.substring(1);
    }
    while(out[out.length-1] === ' '){
        out = out.substring(0, out.length-1)
    }
    for(i=0; i<out.length; ++i){
        if(out[i] === ' ' && out[i+1] === ' '){
             // console.log(out.substring(0,i));
            // console.log(out.substring(i+1));
            out = out.substring(0, i) + out.substring(i+1);
            i -= 1;
        }
    }
    return out
}

console.log(songDecoder("WUBWUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBWUBWUBMYWUBFRIENDWUB"))

function altSongDecoder(song){
    return song.replace(/(WUB)+/g," ").trim()
  }

// trim() removes white spaces from the end and the beginning of a string

