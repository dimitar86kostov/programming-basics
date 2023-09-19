function tournamentOfChristmas
    (params) {
    let i = 0;
    let days = Number(params[0]);
    i++
    let sport = params[i];
    let gamesWin = 0;
    let gamesLose = 0;
    let total = 0;
    let finalSum = 0;

    for (let row = 0; row < days; row++) {
        let sum = 0;
        total = 0;
        let win = 0;
        let lose = 0;
        sport = params[i]

        while (sport !== 'Finish') {
            i++
            let result = params[i];


            if (result === 'win') {
                sum = 20;
                win++
            } else {
                lose++
                i++
                sport = params[i];
                continue;
            }

            total += sum;
            i++
            sport = params[i];

        }
        if (win > lose) {
            total *= 1.10;
            gamesWin++
        } else {
            gamesLose++
        }
        finalSum += total
        i++;
    }
    if (gamesWin > gamesLose) {
        finalSum *= 1.20;
        console.log(`You won the tournament! Total raised money: ${finalSum.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${finalSum.toFixed(2)}`);
    }

}
tournamentOfChristmas([
    '3',
    'darts',
    'lose',
    'handball',
    'lose',
    'judo',
    'win',
    'Finish',
    'snooker',
    'lose',
    'swimming',
    'lose',
    'squash',
    'lose',
    'table tennis',
    'win',
    'Finish',
    'volleyball',
    'win',
    'basketball',
    'win',
    'Finish',


])