function shoping(input) {

    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let sumVideoCards = videoCards * 250;
    let sumProcessors = (0.35 * sumVideoCards) * processors;
    let sumRam = (0.10 * sumVideoCards) * ram;

    let totalSum = sumVideoCards + sumProcessors + sumRam;

    if (videoCards > processors) {
        totalSum = 0.85 * totalSum;
    }

    if (budget >= totalSum) {
        let moneyLeft = budget - totalSum;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalSum - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}
shoping(["920.45","3","1","1"])

// · Видеокарта – 250 лв./бр.
// · Процесор – 35% от цената на закупените видеокарти/бр.
// · Рам памет – 10% от цената на закупените видеокарти/бр.
// Да се изчисли нужната сума за закупуване на материалите и
// да се пресметне дали бюджета ще му стигне.

// 1. Бюджетът на Петър - реално число в интервала [0.0…100000.0]
// 2. Броят видеокарти - цяло число в интервала [0…100]
// 3. Броят процесори - цяло число в интервала [0…100]
// 4. Броят рам памет - цяло число в интервала [0…100]