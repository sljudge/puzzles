function checkCashRegister(price, cash, cid) {
    var owed = cash - price;
    var change = [];
    var values = {
        'ONE HUNDRED' : 100,
        'TWENTY' : 20,
        'TEN' : 10,
        'FIVE' : 5,
        'ONE' : 1,
        'QUARTER' : 0.25,
        'DIME' : 0.1,
        'NICKEL' : 0.05,
        'PENNY' : 0.01
    }
    for(let i=8; i>=0; --i){
        let name = cid[i][0];
        let amount = cid[i][1];
        let denomination = values[name];
        let count = 0;
        while(owed.toFixed(2) >= values[name] && amount > 0){
            ++count;
            amount -= values[name];
            owed -= values[name];
        };
        if(count > 0){
            change.push([name, count*denomination]);
        }
        console.log(cid[i]);
    }
    // console.log(cid.map(x => x[1]).reduce((total, x) => total + x).toFixed(2));
    // console.log(change);
    // console.log(owed);
    if(owed > 0){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }else if(cash - price == cid.map(x => x[1]).reduce((total, x) => total + x).toFixed(2)){
        return {status: "CLOSED", change: cid};
    }else{
        return {status: "OPEN", change: change};
    }
  }
  
//   console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

//   console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

//   console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));