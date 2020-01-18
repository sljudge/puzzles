function uniteUnique() {
    for(let x of [...arguments].slice(1)){
        for(let y of x){
            if(!arguments[0].includes(y)){
                arguments[0].push(y);
            }
        }
    }
    return arguments[0];
}

function uniteUnique2(...arrays){
    const flatArray = [].concat(...arrays);
    return [...new Set(flatArray)];
}


  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  console.log(uniteUnique2([1, 3, 2], [1, [5]], [2, [4]]));