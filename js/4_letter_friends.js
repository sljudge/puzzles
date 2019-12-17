function friend(arr){
    // Takes array and returns array with only the 4 letter words
    friends=[]
    for(var i=0; i<arr.length; ++i){
        if(arr[i].length == 4){
            friends.push(arr[i])
        }
    }
    return friends
}

console.log(friend(["Ryan", "Kieran", "Mark"]))

function altFriend(arr){
    return friends.filter(n => n.length === 4)
}