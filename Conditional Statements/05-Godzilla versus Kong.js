function godzillaVersusKong(input){
let budget = Number(input[0]);
let ppl = Number(input[1]);
let priceForClothing = Number(input[2]);

let dekor = 0.10 * budget;
let totalClothing = priceForClothing * ppl;

if (ppl > 150) {
    totalClothing = 0.90 * totalClothing;
}

totalSum = dekor + totalClothing;

if(totalSum > budget){
    let moneyNeeded = totalSum - budget;
    console.log('Not enough money!');
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
}else{
    let moneyLeft = budget - totalSum;
    console.log('Action!');
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
}

}
godzillaVersusKong(["9587.88","222","55.68"])

// · Декорът за филма е на стойност 10% от бюджета.
// · При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.

// 1. Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
// 2. Брой на статистите – цяло число в интервала [1 … 500]
// 3. Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]