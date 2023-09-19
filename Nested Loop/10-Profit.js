function profit(params) {

    let lv1 = Number(params[0]);
    let lv2 = Number(params[1]);
    let lv5 = Number(params[2]);
    let sum = Number(params[3]);

    for (let first = 0; first <= lv1; first++) {
        for (let second = 0; second <= lv2; second++) {
            for (let third = 0; third <= lv5; third++) {

                if (sum === (first * 1 + second * 2 + third * 5)) {
                    console.log(`${first} * 1 lv. + ${second} * 2 lv. + ${third} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}
profit([
    '5',
    '3',
    '1',
    '7',
])