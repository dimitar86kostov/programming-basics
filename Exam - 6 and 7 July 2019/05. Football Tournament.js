function footballTournament(params) {
    let i = 0;
    let team = params[i];
    i++;
    let countGames = Number(params[i]);
    i++
    let wPoints = 0;
    let wGames = 0;
    let dGames = 0;
    let lGames = 0;
    let average = 0;

    for (let row = 0; row < params.length; row++) {
        let curRow = params[row];

        switch (curRow) {
            case 'W':
                wPoints += 3;
                wGames++;
                break;
            case 'D':
                wPoints += 1;
                dGames++;
                break;
            case 'L':
                lGames++;
                break;
        }
    }
    average = (wGames / countGames) * 100;
    if (countGames == 0) {
        console.log(`${team} hasn't played any games during this season.`);
    } else {
        console.log(`${team} has won ${wPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${wGames}`);
        console.log(`## D: ${dGames}`);
        console.log(`## L: ${lGames}`);
        console.log(`Win rate: ${average.toFixed(2)}%`);
    }
}
footballTournament([
    'Liverpool',
    '10',
    'W',
    'D',
    'D',
    'W',
    'L',
    'W',
    'D',
    'D',
    'W',
    'W',

])