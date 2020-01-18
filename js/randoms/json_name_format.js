/*
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/

var names = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ];

function list(names){
    console.log(names.length)
    if( names.length == 1){
        return names[0].name;
    } else if( names.length > 0){
        out = [];
        names.map( item => out.push(item.name) );
        lastName = out.pop();
        return out.join(', ') + ' & ' + lastName;
    } else{
        return '';
    }
}

console.log(list(names));
console.log(list([{name: 'Bart'}]));