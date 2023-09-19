function backToThePast(input) {

    let moneyGiven = Number(input[0]);
    let yearMustLive = Number(input[1]);
    let age = 18;
    for (let i = 1800; i <= yearMustLive; i++) {
        
        if (i % 2 === 0) {
            moneyGiven -= 12000;
        } else if (i % 2 !== 0) {
            age++;
            moneyGiven -= 12000 + 50 * age;
            age++;
        }
    }
    if (moneyGiven >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${moneyGiven.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(moneyGiven.toFixed(2))} dollars to survive.`);
    }
}
backToThePast(['100000.15', '1808'])