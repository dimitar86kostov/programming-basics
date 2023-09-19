function theSongOfTheWheels(params) {
    let m = Number(params[0]);
    let controlValue = '';
    let counter = 0;
    let holder = '';
    let empty = false;
    let isLess = false;

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {

                    if (a < b && c > d) {

                        if ((a * b + c * d) === m) {
                            controlValue += `${a}${b}${c}${d} `
                            counter++;

                            if (counter === 4) {
                                holder = `${a}${b}${c}${d}`
                            } if (counter < 4) {
                                isLess = true;
                            } else if (counter >= 4) {
                                isLess = false;
                            }
                        }
                    }
                    if (counter === 0) {
                        empty = true;
                    }else{
                        empty = false;
                    }
                }
            }
        }
    }
    console.log(controlValue);
    
    if (empty) {
        console.log("No!");
    } else if (isLess) {
        console.log("No!");
    }else{
        console.log(`Password: ${holder}`);
    }

}
theSongOfTheWheels([
    '11'
])