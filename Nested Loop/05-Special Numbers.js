function specialNumbers(input) {

    let number = Number(input[0]);

    let result = '';
    let total = '';
    let isSPecial = false;

    for (let curNum = 1111; curNum < 9999; curNum++) {

        let numberAsStr = curNum.toString();

        for (let d = 0; d < numberAsStr.length; d++) {

            let curDigit = Number(numberAsStr[d]);

            if (number % curDigit === 0) {
                result += `${curDigit}`;
                isSPecial = true;
            }else{
                isSPecial = false
                result = '';
                break;
            }
        }
        if (isSPecial) {
            total += `${result} `
        }
        result = '';
    }
    console.log(total);
}
specialNumbers(["3"])