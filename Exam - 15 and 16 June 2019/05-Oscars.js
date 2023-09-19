function oscars(params) {
    let i = 0;
    let actor = params[0];
    i++;
    let initialPoints = Number(params[i]);
    i++;
    let judgesQuant = Number(params[i]);
    let total = initialPoints;
    let goal = 1250.5;

    for (let cur = 0; cur < judgesQuant; cur++) {
        
        i++;
        let judgeName = params[i];
        i++;
        let curPoints = Number(params[i]);

        total += (judgeName.length * curPoints) / 2;
        

        if (total > goal) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${total.toFixed(1)}!`);
            break;
        }
    }

    if (goal > total) {
        let lackPoints = goal - total;
        console.log(`Sorry, ${actor} you need ${lackPoints.toFixed(1)} more!`);
    }

}
oscars(['Zahari Baharov',
    '205',
    '4',
    'Johnny Depp',
    '45',
    'Will Smith',
    '29',
    'Jet Lee',
    '10',
    'Matthew Mcconaughey',
    '39'
])