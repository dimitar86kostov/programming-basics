function happyNumbers(params) {
    let num = Number(params[0]);
    let happyNums = 0;
    let holder = '';

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {

                    
                    if (a + b === c + d) {
                        happyNums = `${a}${b}${c}${d}`;
                        let result = a + b;
                        if (num % result === 0) {
                            
                            holder += `${a}${b}${c}${d} `;

                        }
                    }
                }
            }

        }
    }
    console.log(holder);
}
happyNumbers(['7'])