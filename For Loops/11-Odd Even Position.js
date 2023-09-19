function oddEvenPosition(params) {
    let i = 0;
    let curNum = Number(params[i]);
    let counter = 0;

    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;

    while (i < params.length) {
        counter++;

        if (counter % 2 === 0) {
            evenSum += curNum;
            if (curNum < evenMin) {
                evenMin = curNum;
            }
            if (curNum > evenMax) {
                evenMax = curNum;
            }
        } else if (counter % 2 !== 0) {
            oddSum += curNum;
            if (curNum < oddMin) {
                oddMin = curNum;
            }
            if (curNum > oddMax) {
                oddMax = curNum;
            }
        }

        i++;
        curNum = Number(params[i]);
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);

    if (oddMin === 9007199254740991 || oddMin === 0) {
        console.log(`OddMin=No,`);
    }else{
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }

    if (oddMax === -9007199254740991 || oddMin === 0) {
        console.log(`OddMax=No,`);
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if (evenMin === 9007199254740991 || oddMin === 0) {
        console.log(`EvenMin=No,`);
    }else{
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }

    if (evenMax === -9007199254740991 || oddMin === 0) {
        console.log(`EvenMax=No,`);
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)},`);
    }


}
oddEvenPosition([

    '1.5',
    '1.75',
    '1.5',
    '1.75',
    
    

])