function vetParking(params) {

    let daysQuant = Number(params[0]);
    let hoursPerDay = Number(params[1]);
    let i = 1;
    let price = 0;
    let total = 0;

    while (i <= daysQuant) {
        hoursPerDay = Number(params[1]);

        for (let curH = 1; curH <= hoursPerDay; curH++) {
            if (i % 2 !== 0 && curH % 2 === 0) {
                price += 1.25;
                total += 1.25;
            } else if (i % 2 === 0 && curH % 2 !== 0) {
                price += 2.50;
                total += 2.50;
            } else {
                price += 1;
                total += 1;
            }
        }
        console.log(`Day: ${i} - ${price.toFixed(2)} leva`);
        i++;
        price = 0;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}
vetParking(['5', '2'])