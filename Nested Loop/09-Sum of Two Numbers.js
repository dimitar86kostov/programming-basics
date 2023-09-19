function sumOfTwoNumbers(params) {
    let start = Number(params[0]);
    let end = Number(params[1]);
    let magicNum = Number(params[2]);

    let counter = 0;
    let result = 0;

    for (let a = start; a <= end; a++) {
        if (result === magicNum) {
            break;
        }
        for (let b = start; b <= end; b++) {

            counter++;
            result = a + b;
            if (result === magicNum) {
                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNum})`);
                break;
            }
        }

    }
    if (result !== magicNum) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers([
    '88',
    '888',
    '1000'
])
