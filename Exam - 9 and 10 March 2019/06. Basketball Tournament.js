function basketballTour(params) {
    let i = 0;
    let nameTour = params[i];
    let win = 0;
    let lose = 0;
    let TourCount = 1;
    let totalMatches = 0;

    while (nameTour !== 'End of tournaments') {
        i++;
        let matches = Number(params[i]);
        let matchCount = 0;

        for (let g = 1; g <= matches; g++) {
            matchCount++;
            totalMatches++;
            let diff = 0;
            i++;
            let desiPoints = Number(params[i]);
            i++;
            let enemyPoints = Number(params[i]);

            if (desiPoints > enemyPoints) {
                win++;
                diff = desiPoints - enemyPoints;
                console.log(`Game ${matchCount} of tournament ${nameTour}: win with ${diff} points.`);

            } else if (desiPoints < enemyPoints) {
                lose++
                diff = enemyPoints - desiPoints;
                console.log(`Game ${matchCount} of tournament ${nameTour}: lost with ${diff} points.`);
            }

        }
        i++;
        nameTour = params[i];
        TourCount++;
    }

    let averageWin = (win * 100) / totalMatches;
    let averageLose = (lose * 100) / totalMatches;

    if (nameTour === 'End of tournaments') {
        console.log(`${averageWin.toFixed(2)}% matches win`);
        console.log(`${averageLose.toFixed(2)}% matches lost`);
    }



}
basketballTour([
    'Dunkers',
    '2',
    '75',
    '65',
    '56',
    '73',
    'Fire Girls',
    '3',
    '67',
    '34',
    '83',
    '98',
    '66',
    '45',
    'End of tournaments'
])