function toyShop(input) {

    let excursionPrice = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let toys = puzzels + dolls + bears + minions + trucks;
    let totalPrice = puzzels * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;

    if (toys >= 50) {
        totalPrice = 0.75 * totalPrice;
    }

    totalPrice = 0.90 * totalPrice;

    if (totalPrice > excursionPrice) {
        let moneyLeft = totalPrice - excursionPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);

    } else {
        let moneyNeeded = excursionPrice - totalPrice;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}
toyShop(["320", "8", "2", "5", "5", "1"])