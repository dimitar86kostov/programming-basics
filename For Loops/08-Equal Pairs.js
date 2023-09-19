function equalPairs(input) {

    let quantity = Number(input[0]);
    let i = 1;
    let maxDiff = Number.MIN_SAFE_INTEGER;

    let equal = true;
    let prevPair = Number(input[i++]) + Number(input[i++]);


    for (let p = 1; p < quantity; p++) {

        let firstNum = Number(input[i++]);
        let secondNum = Number(input[i++]);
        let pair = firstNum + secondNum;
        let diff = Math.abs(prevPair - pair);

        if (pair !== prevPair) {
            equal = false;
        }
        if (diff > maxDiff) {
            maxDiff = diff;
        }
        prevPair = pair;
    }

    if (equal) {
        console.log(`Yes, value=${prevPair}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}
equalPairs(['7',
    '34', '-33',
    '52', '12',
    '-32', '32',
    '23', '41',
    '7', '25',
    '34', '23',
    '124', '21'

])