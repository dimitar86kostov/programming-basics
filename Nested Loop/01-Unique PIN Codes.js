function uniquePINCodes(params) {

    let firstNum = Number(params[0]);
    let secondNum = Number(params[1]);
    let thirdNum = Number(params[2]);

    for (let a = 2; a <= firstNum; a += 2) {
        for (let b = 2; b <= 7; b++) {
            let isPrime = true;
            for (let c = 2; c < b; c++) {
                if (b % c === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime && b <= secondNum) {
                    for (let d = 2; d <= thirdNum; d += 2) {

                        console.log(`${a}${b}${d} `);

                    }
                }
            }

        }

    }


uniquePINCodes(['3', '5', '5'])