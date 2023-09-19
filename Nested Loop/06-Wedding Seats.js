function weddingSeats(params) {

    let lastSector = params[0];
    let firstRow = Number(params[1]);
    let placesOdd = Number(params[2]);
    let counter = 0

    for (let b = 1; b < firstRow; b++) {
        if (counter >= 8) {
            firstRow = Number(params[1]) + 1
        }
        for (let a = 1; a <= firstRow + 1; a++) {

            if (a % 2 !== 0 && a <= firstRow) {
                if (b === 1) {
                    console.log(`A${a}a`);
                    console.log(`A${a}b`);
                    counter += 2;
                } else if (b === 2) {
                    console.log(`B${a}a`);
                    console.log(`B${a}b`);
                    counter += 2;
                }else if (b === 3) {
                    console.log(`C${a}a`);
                    console.log(`C${a}b`);
                    counter += 2;
                }

            } else if (a % 2 === 0 && a <= firstRow) {
                if (b === 1) {
                    console.log(`A${a}a`);
                    console.log(`A${a}b`);
                    console.log(`A${a}c`);
                    console.log(`A${a}d`);
                    counter += 4;
                } else if (b === 2) {
                    console.log(`B${a}a`);
                    console.log(`B${a}b`);
                    console.log(`B${a}c`);
                    console.log(`B${a}d`);
                    counter += 4;
                }else if (b === 3) {
                    console.log(`C${a}a`);
                    console.log(`C${a}b`);
                    console.log(`C${a}c`);
                    console.log(`C${a}d`);
                    counter += 4
                }
            }
        }
    }
    console.log(counter);
}
weddingSeats([
    'C',
    '4',
    '2'
])