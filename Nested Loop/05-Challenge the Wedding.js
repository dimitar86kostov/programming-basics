function challengeTheWedding(params) {
    let man = Number(params[0]);
    let woman = Number(params[1]);
    let maxTables = Number(params[2]);
    let counter = 0;
    let holder = '';

    for (let a = 1; a <= man; a++) {
        for (let b = 1; b <= woman; b++) {
            
            if (maxTables === counter) {
                break;
            }
            counter++;
            holder += `(${a} <-> ${b}) `
        }
    }
    console.log(holder);
}
challengeTheWedding([
    '2',
    '2',
    '3'
])
