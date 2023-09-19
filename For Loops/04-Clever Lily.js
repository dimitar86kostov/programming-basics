function cleverLily(input) {

    let age = Number(input[0]);
    let washingMPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let savedMoney = 0;
    let moneyGiven = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 !== 0) {
            savedMoney += pricePerToy;
        } else {
            moneyGiven += 10;
            savedMoney += (moneyGiven - 1);
            
            
        }
    }

    if (savedMoney >= washingMPrice) {
        let moneyLeft = savedMoney - washingMPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyLack = washingMPrice - savedMoney;
        console.log(`No! ${moneyLack.toFixed(2)}`);
    }
}
cleverLily(["21",
"1570.98",
"3"])

