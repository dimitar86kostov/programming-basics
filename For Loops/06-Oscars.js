function oscars(input) {
    let actorName = input[0];
    let initialPoints = Number(input[1]);
    let judges = Number(input[2]);

    let nameJudge = '';
    let curPoints = 0;
    let judgePoints = 0;
    let total = 0;

    for (let i = 3; i < input.length; i += 1) {
        nameJudge = input[i];
        let lettersJudge = nameJudge.length;
        i++;
        judgePoints = input[i];
        curPoints = (judgePoints * lettersJudge) / 2;
        total += curPoints;
        if ((total + initialPoints) >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(total + initialPoints).toFixed(1)}!`);
            break;
        }
    }
    if ((total + initialPoints) <= 1250.5) {
        let moneyLack = (1250.5 - (total + initialPoints));
        console.log(`Sorry, ${actorName} you need ${moneyLack.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

