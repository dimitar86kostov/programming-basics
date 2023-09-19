function equalSumsEvenOddPosition(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = '';

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let oddSum = 0;
        let evenSum = 0;
        let curNumStr = curNum.toString();

        for (let i = 0; i < curNumStr.length; i++) {
            let curNumDigit = Number(curNumStr[i]);
            let position = i + 1;

            if (position % 2 === 0) {
                evenSum += curNumDigit;
            } else {
                oddSum += curNumDigit;
            }
        }
        if (evenSum === oddSum) {
            result += curNumStr + ' ';
        }
    }
    console.log(result);

}
equalSumsEvenOddPosition(["100000",
    "100050"])
