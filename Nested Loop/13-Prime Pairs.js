function primePairs(params) {

    let firstPair = Number(params[0]);
    let secondPair = Number(params[1]);
    let diffFirst = Number(params[2]);
    let diffSecond = Number(params[3]);

    let end1 = firstPair + diffFirst;
    let end2 = secondPair + diffSecond;
    let curResult = 0;
    let holderA = '';
    let holderB


    for (let a = firstPair; a <= end1; a++) {

        for (let b = secondPair; b <= end2; b++) {
            let isPrimeA = true;
            let isPrimeB = true;

            curResult = `${a}${b}`
            curA = a;
            curB = b;

            for (let c = 2; c < curA; c++) {
                if (curA % c === 0) {
                    isPrimeA = false;
                    break;
                }
            }
            for (let f = 2; f < curB; f++) {
                if (curB % f === 0) {
                    isPrimeB = false;
                    break;
                }
            }
            if (isPrimeA) {
                holderA = curA
            }
            if (isPrimeB) {
                holderB = curB
            }
            if (isPrimeA && isPrimeB) {
                console.log(`${holderA}${holderB}`);
            }
        }
    }
}
    primePairs([
        '10',
        '30',
        '9',
        '6',
    ])