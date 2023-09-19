function uniquePINCodes(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);
 
    for (let a = 2; a <= firstNum; a += 2) {
        for (let b = 2; b <= 7; b++) {
            let isFound = true;
            for (let c = 2; c < b; c++) {
                if (b % c === 0) {
                    isFound = false;
                    break;
                }
            }
            if (isFound && b <= secondNum) {
                for (let d = 2; d <= thirdNum; d += 2) {
                    console.log(`${a} ${b} ${d}`);
                }
            }
        }
    }
}
uniquePINCodes(["3",
"5",
"5"])
