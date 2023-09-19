function numberPyramid(input) {

let n = Number(input[0]);

let current = 1;
let isBigger = false;
let printCurLine = '';

for (let rows = 1; rows <= n; rows++){

    for (let cols = 1; cols <= rows; cols++){

        if (current > n) {
            isBigger = true;
            break;
        }
        printCurLine += current + ' ';
        current++
    }
    console.log(printCurLine);
    printCurLine = '';
    if (isBigger) {
        break;
    }
}
    

}
numberPyramid(["7"])