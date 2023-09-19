function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let Class = '';
    let type = ''; 

    switch (season) {
        case 'Summer':
            if (budget <= 100) {
                Class = 'Economy class';
                type = 'Cabrio';
                price = budget * 0.35;
            } else if (budget > 100 && budget <= 500) {
                Class = "Compact class";
                type = 'Cabrio';
                price = budget * 0.45
            } else {
                Class = "Luxury class";
                type = "Jeep";
                price = budget * 0.90;
            }
            break;
        case 'Winter':
            if (budget <= 100) {
                Class = 'Economy class';
                type = 'Jeep';
                price = budget * 0.65;
            } else if (budget > 100 && budget <= 500) {
                Class = "Compact class";
                type = 'Jeep';
                price = budget * 0.80
            } else {
                Class = "Luxury class";
                type = "Jeep";
                price = budget * 0.90;
            }
    }
    console.log(Class);
    console.log(`${type} - ${price.toFixed(2)}`);
}
carToGo(['70.50', 'Winter'])
// При бюджет по-малък или равен от 100лв.:
// Класът ще е - "Economy class"
// Според сезона колата и цената ще са:
// Лято – Кабрио – 35% от бюджета
// Зима – Джип – 65% от бюджета

// При бюджет по-голям от 100лв. и по-малък или равен от 500лв.:
// Класът ще е - "Compact class"
// Според сезона колата и цената ще са:
// Лято – Кабрио – 45% от бюджета
// Зима – Джип – 80% от бюджета

// При бюджет по-голям от 500лв.:
// Класът ще е – "Luxury class"
// За всеки сезон колата ще е джип и цената ще е:
// 90% от бюджета
