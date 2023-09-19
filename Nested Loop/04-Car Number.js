function carNumber(params) {
    let start = Number(params[0]);
    let end = Number(params[1]);

    let sum = 0;
    let result = '';

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            for (let c = start; c <= end; c++) {
                for (let f = start; f <= end; f++) {
                    let isEvenOdd = false;
                    let isBigger = false;
                    let sumIsOk = false;

                    if (a % 2 === 0 && f % 2 !== 0) {
                        isEvenOdd = true;
                    } else if (a % 2 !== 0 && f % 2 === 0) {
                        isEvenOdd = true;
                    }
                    if (a > f) {
                        isBigger = true;
                    }
                    sum = b + c;
                    if (sum % 2 === 0) {
                        sumIsOk = true;
                    }
                    if (isEvenOdd && isBigger && sumIsOk) {
                        result += `${a}${b}${c}${f} `

                    }

                }
            }
        }

    }
    console.log(result);
}
carNumber([
    '3',
    '5'
])