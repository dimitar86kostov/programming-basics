function tennisRanklist(params) {
    let i = 0;
    let tournaments = Number(params[i]);
    i++;
    let initialPoints = Number(params[i]);
    i++;
    let game = params[i];
    let finalPoints = 0;
    let average = 0;
    let win = 0;
    let lose = 0;

    while (i <= params.length) {
        switch (game) {
            case 'W':
                finalPoints += 2000;
                win++;
                break;
            case 'F':
                finalPoints += 1200;
                lose++;
                break;
            case 'SF':
                finalPoints += 720;
                lose++;
                break;
        }
        i++;
        game = params[i];
    }
    average = finalPoints / tournaments;
    let winP = (win * 100) / tournaments;
    let final = finalPoints + initialPoints
    console.log(`Final points: ${final}`);
    console.log(`Average points: ${Math.floor(average)}`);
    console.log(`${winP.toFixed(2)}%`);


}
tennisRanklist(['5',
    '1400',
    'F',
    'SF',
    'W',
    'W',
    'SF'
])