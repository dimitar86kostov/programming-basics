function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let destination = '';
    let type = '';

    switch (season) {
        case 'summer':
            if (budget <= 100) {
                price = budget * 0.30;
                destination = 'Bulgaria'
            } else if (budget <= 1000) {
                price = budget * 0.40;
                destination = "Balkans"
            } else {
                price = budget * 0.90;
                destination = 'Europe'
            }
            break;
        case 'winter':
            if (budget <= 100) {
                price = budget * 0.70;
                destination = 'Bulgaria'
            } else if (budget <= 1000) {
                price = budget * 0.80;
                destination = "Balkans"
            } else {
                price = budget * 0.90;
                destination = 'Europe'
            }
            break;
    }

if (season === 'summer') {
    type = "Camp";
    if (destination === 'Europe') {
        type = 'Hotel'
    }
}else if (season === 'winter') {
    type = "Hotel";
}

console.log(`Somewhere in ${destination}`);
console.log(`${type} - ${price.toFixed(2)}`);
}
journey (["1500", "summer"])
// При 100лв. или по-малко – някъде в България
// Лято – 30% от бюджета
// Зима – 70% от бюджета
// При 1000лв. или по малко – някъде на Балканите
// Лято – 40% от бюджета
// Зима – 80% от бюджета
// При повече от 1000лв. – някъде из Европа
// При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.