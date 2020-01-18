var sum = ['3', '+', '4', 'x', '54', '/', '27', 'x', '1'] // = 11

function demo(sum){
  var math = {
    '/': (x,y) => parseFloat(x)/parseFloat(y),
    'x': (x,y) => parseFloat(x)*parseFloat(y),
    '+': (x,y) => parseFloat(x)+parseFloat(y),
    '-': (x,y) => parseFloat(x)-parseFloat(y),
  }
  for(op of ['/', 'x', '+', '-']){
    while(sum.includes(op)){
      for(x in sum){
        if( sum[x] == op ){
          segment = sum.slice(x-1, x+2)
          insert = math[op](segment[0], segment[2]) 
          sum.splice(x-1, 3, insert)
        }
      }
    }
  }
  
  return sum.toString()
}
// var total = 0
console.log(sum.reduce( ((total, item) => total+item.length ),0) )
console.log(demo(sum))
console.log(demo(sum).length)