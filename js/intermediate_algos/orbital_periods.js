function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for(let x of arr){
        x['orbitalPeriod'] = Math.round( 2 * Math.PI * Math.sqrt( Math.pow( x['avgAlt']+earthRadius, 3 ) / GM ) );
        delete x['avgAlt'];
    }
    return arr;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));