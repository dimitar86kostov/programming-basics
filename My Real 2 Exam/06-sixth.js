function goldMine(params) {
    let i = 0;

    let locations = Number(params[i]);





    for (let loc = 0; loc < locations; loc++) {
        let average = 0;
        let gold = 0;
        i++;
        let goalDaily = Number(params[i]);
        i++;
        let days = Number(params[i]);

        for (let curDay = 1; curDay <= days; curDay++) {
            i++;
            let curGold = Number(params[i]);

            gold += curGold;
            average += curGold
        }
        average /= days;
        if (average >= goalDaily) {
            console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`);
        } else {

            console.log(`You need ${(goalDaily - average).toFixed(2)} gold.`);
        }
    }
}



goldMine(["1",
"5",
"3",
"10",
"1",
"3"])

