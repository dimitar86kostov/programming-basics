function finalCompetition(params) {
    let dancers = Number(params[0]);
    let points = Number(params[1]);
    let season = params[2];
    let place = params[3];

    let sum = 0;

    switch (season) {
        case "summer":
            if (place === "Bulgaria") {
                sum += points * dancers;
                sum *= 0.95;
            } else {
                sum += points * dancers;
                sum *= 1.50;
                sum *= 0.90;
            }
            break;

        case "winter":
            if (place === "Bulgaria") {
                sum += points * dancers;
                sum *= 0.92;
            } else {
                sum += points * dancers;
                sum *= 1.50;
                sum *= 0.85;
            }
            break;
    }
    let charity = sum * 0.75;
    let leftSum = sum * 0.25;
    let totalPerDancer = leftSum / dancers;

console.log(`Charity - ${charity.toFixed(2)}`);
console.log(`Money per dancer - ${totalPerDancer.toFixed(2)}`);

}
finalCompetition(["1",
    "89.5",
    "summer",
    "Abroad"])
