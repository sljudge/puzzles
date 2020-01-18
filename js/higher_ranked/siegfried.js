var siegfried = function(week, str) {
    let regexes = [
        [/ci/gi, 'si'],  //CI           -----WEEK1
        [/ce/gi, 'se'], //CE
        [/(c)(?!h)/gi, 'k'], //C NO H   
        [/ph/gi, 'f'],  //ph            ------WEEK2
        /\w{3,}e+/gi,//               ------WEEK3
        [/th/gi, 'z'],  //TH            ------WEEK4
        [/wr/gi, 'r'],  //WR
        [/wh|w/gi, 'v'], //W/WH           
        [/ou/gi, 'u'],  //ou            -----WEEK 5
        [/an/gi, 'un'], //an
        [/\ssm/gi, ' schm'], //sm
        /\w*ing\b/gi
    ]
    
    const week1 = () => {
        str = str.replace(regexes[0][0], regexes[0][1])
            .replace(regexes[1][0], regexes[1][1])
            .replace(regexes[2][0], regexes[2][1])
        return str
    }

    const week2 = () => {
        week1();
        str = str.replace(regexes[3][0], regexes[3][1]);
        return str
    }

    const week3 = () => {
        week1(); week2();
        try{
            let current = str.match(regexes[4]);
            let temp = current.map( item => item.slice(0,-1));
            for(let i=0; i<temp.length; i++){
                str=str.replace(current[i], temp[i]);
            }
        }finally{
            return str
        }
    }
    

    const week4 = () => {
        week1(); week2(); week3();
        str = str.replace(regexes[5][0], regexes[5][1])
            .replace(regexes[6][0], regexes[6][1])
            .replace(regexes[7][0], regexes[7][1])
        return str
    }

    const week5 = () => {
        week1(); week2(); week3(); week4();
        str = str.replace(regexes[8][0], regexes[8][1])
            .replace(regexes[9][0], regexes[9][1])
            .replace(regexes[10][0], regexes[10][1])

        try{
            current = str.match(regexes[11]);
            temp = current.map( item => item.slice(0,-3)+'ink');
            for(let i=0; i<temp.length; i++){
                str=str.replace(current[i], temp[i]);
            }
        }finally{
            return str
        }
    }

    switch(week){
        case 1: week1(); break;
        case 2: week2(); break; 
        case 3: week3(); break;
        case 4: week4(); break;
        case 5: week5(); break;
        default: console.log('invalid week');
    }
    
    //remove whitespace
    str = str.replace(/\s{2,}/g, ' ');

    return str
  }

  var english = "\
        This is KAOS!! We don't play with Code-Wars here!! \
        So there will be trouble for you this time Mr Maxwell Smart! \
        We have received all the photographic evidence we need so choose carefully what you say next! \
        I hope you will co-operate with KAOS and do exactly what we want Mr Smart otherwise I won't be happy with you! \
        In fact, if you misbehave that would make me very unhappy indeed... \
        And you certainly would not want to make me unnecesarily cross would you Mr Maxwell Smart?\
        That would be running a grave risk indeed!\
        Small though I may be I am mighty!\
        "
var test = 'nice'

console.log(siegfried(4,  english ));
console.log(siegfried(1,  test ));
// console.log(siegfried(english ));
// console.log(siegfried( 'out annual running small' ));