function fuelTankTwo(input) {

    let fuelType = input[0];
    let quantity = Number(input[1]);
    let hasDiscountCard = input[2];

    let fuelPricePerLitter = 0

    switch (fuelType) {
        case 'gasoline':
            fuelPricePerLitter = 2.22;
            if (hasDiscountCard === 'yes') {
                fuelPricePerLitter -= 0.18;
            }
            break;
        case 'diesel':
            fuelPricePerLitter = 2.33;
            if (hasDiscountCard === 'yes') {
                fuelPricePerLitter -= 0.12;
            }
            break;
        case 'gas':
            fuelPricePerLitter = 0.93;
            if (hasDiscountCard === 'yes') {
                fuelPricePerLitter -= 0.08;
            }
            break;
    }

let total = fuelPricePerLitter * quantity;
if (quantity >= 20 && quantity <= 25) {
    total *= 0.92;
} else if (quantity > 25) {
    total *= 0.90
}
console.log(`${total.toFixed(2)} lv.`);
}
fuelTankTwo(['diesel', '19', 'no'])

// •	Бензин – 2.22 лева за един литър,
// •	Дизел – 2.33 лева за един литър
// •	Газ – 0.93 лева за литър
// Ако водача има карта за отстъпки,  той се възползва от следните намаления за литър гориво: 18 ст. за литър бензин, 12 ст. за литър дизел и 8 ст. за литър газ.
// Ако шофьора е заредил между 20 и 25 литра включително, той получава 8 процента отстъпка от крайната цена,
// при повече от 25 литра гориво, той получава 10 процента отстъпка от крайната цена.
