function pointOnRectangleBorder(input) {

    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);

    x1 < x2 && y1 < y2;

    if (x === x1 || x === x2) {
    } if (y < y2 && y > y1) {
        console.log('Border');
    } else if (y === y1 || y === y2) {
        if (x < x2 && x > x1) {
            console.log("Inside / Outside");
        }
    }
}
    pointOnRectangleBorder(['2', '-3', '12', '8', '-1'])