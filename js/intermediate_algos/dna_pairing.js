function pairElement(str) {
    let out = [];
    for(let x of str){
        switch(x) {
            case 'A' : out.push(['A','T']); break;
            case 'T' : out.push(['T','A']); break;
            case 'C' : out.push(['C','G']); break;
            case 'G' : out.push(['G','C']); break;
        };
    }
    return out;
  }
  
  console.log(pairElement("GCG"));
  console.log(pairElement("ATCGA"));
  console.log(pairElement("TTGAG"));