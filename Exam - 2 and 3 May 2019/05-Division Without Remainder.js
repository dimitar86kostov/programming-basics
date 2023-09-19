function divisionWithoutRemainder(params) {
    let index = 0;

    let n = Number(params[index]);
    index++;
    let next = Number(params[index]);
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;

    while (index <= n) {
        if (next % 2 === 0) {
            group2++
        }
        if (next % 3 === 0) {
            group3++
        }
        if (next % 4 === 0) {
            group4++
        }
        index++;
        next = Number(params[index]);
    }





    let p2 = (group2 / n) * 100;
    let p3 = (group3 / n) * 100;
    let p4 = (group4 / n) * 100;
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
}
divisionWithoutRemainder(['10',
    '680',
    '2',
    '600',
    '200',
    '800',
    '799',
    '199',
    '46',
    '128',
    '65',
])