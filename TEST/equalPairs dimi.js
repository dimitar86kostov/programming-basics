function checkPairs(input) {
    let n = Number(input[0]);
   
    let equalPairs = true;
    let maxDiff = 0;
   
    let index = 1; 
    let prevPair = Number(input[index++]) + Number(input[index++]); 
    for (let i = 1; i < n; i++) {
      let num1 = Number(input[index++]);
      let num2 = Number(input[index++]);
      let pair = num1 + num2;
   
      if (pair !== prevPair) {
        
        equalPairs = false;
        let diff = Math.abs(pair - prevPair);
        if (diff > maxDiff) {
          maxDiff = diff;
        }
      }
   
      prevPair = pair; 
     
    }
   
    if (equalPairs) {
      console.log(`Yes, value=${prevPair}`); 
    } else {
      console.log(`No, maxdiff=${maxDiff}`); 
    }
  }
  checkPairs(['7',
    '34', '-33',
    '52', '12',
    '-32', '32',
    '23', '41',
    '7', '25',
    '34', '23',
    '124', '21'

])