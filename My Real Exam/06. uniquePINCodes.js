function uniquePINCodes(params) {
    let first = Number(params[0]);
    let second = Number(params[1]);
    let third = Number(params[2]);

    for (let a = 2; a <= first; a += 2) {
        for (let b = 2; b <= 7; b++) {
            let isPrime = true;
            for (let c = 2; c < b; c++) {

                if (b % c === 0) {
                    isPrime = false;
                    break;
                }

            } if (isPrime && b <= second) {
                for (let d = 2; d <= third; d += 2) {
                    console.log(`${a} ${b} ${d}`);
                }
            }
        }

    }
}
uniquePINCodes(["8",
    "2",
    "8"])

