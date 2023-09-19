function vacation(input) {
    let i = 0;

    let moneyGoal = Number(input[i]);
    i++;
    let moneyCash = Number(input[i])
    i++;
    let type = input[i];
    i++;
    let sumSavedOrSpend = Number(input[i]);
    i++;
    let days = 0;
    let countSpend = 0;
    let countSave = 0;

    while (moneyCash <= moneyGoal) {
        days++;
        if (type === 'spend') {
            countSpend++
            moneyCash -= sumSavedOrSpend;

            if (countSpend === 5) {
                console.log(`You can't save the money.`);
                console.log(`${days}`);
            }
            if (moneyCash < 0) {
                moneyCash = 0;
            }
        } else {
            countSave++
            moneyCash += sumSavedOrSpend
            countSpend = 0;
        }
        if (input.length > i) {
            type = input[i]
            i++;
            sumSavedOrSpend = Number(input[i]);
            i++;
        } else {
            break;
        }
    }
    if (moneyCash >= moneyGoal) {
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])
