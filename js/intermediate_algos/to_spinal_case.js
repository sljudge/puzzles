function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(/\W|_/).join('-');
  }
  
  console.log(spinalCase('this/Is/SpinalTap'));