function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    htmlEntities={
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      '\'':"&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str.split('').map(entity => htmlEntities[entity] || entity).join('');
  }

function convertHTML(str) {
    // convert & < > " ' to HTML entity;
    let out = str.split('');
    for(let x in out){
        switch(out[x]){
            case '&' : out[x] = '&amp;'; break;
            case '<' : out[x] = '&lt;'; break;
            case '>' : out[x] = '&gt;'; break;
            case '"' : out[x] = '&quot;'; break;
            case "'" : out[x] = '&apos;'; break;
        }; 
    }

    return out.join('');
};


  
  console.log(convertHTML("Dolce & Gab'b'ana"));