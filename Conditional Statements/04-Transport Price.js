function transportPrice(input) {
    let kmCount = Number(input[0]);
    let travelingBy = input[1];

    let taxiDay = 0.70 + 0.79 * kmCount;
    let taxiNight = 0.70 + 0.90 * kmCount;
    let bus = 0.09 * kmCount;
    let train = 0.06 * kmCount;

    if (travelingBy === "day") {
        kmCount <= 20;
        console.log(taxiDay);
    } else if (kmCount <= 100) {
        console.log(bus);
    } else if (kmCount >= 100) {
        console.log(train);
    }

    if (travelingBy === "night") {
        kmCount <= 20;
        console.log(taxiNight);
    } else if (kmCount <= 100) {
        console.log(bus);
    } else if (kmCount >= 100) {
        console.log(train);
    }
}

transportPrice(['7', 'night'])

// // •	Такси. Начална такса: 0.70 лв. Дневна тарифа: 0.79 лв. / км. Нощна тарифа: 0.90 лв. / км.
// // •	Автобус. Дневна / нощна тарифа: 0.09 лв. / км.
// Може да се използва за разстояния минимум 20 км.
// // •	Влак. Дневна / нощна тарифа: 0.06 лв. / км.
// Може да се използва за разстояния минимум 100 км.
