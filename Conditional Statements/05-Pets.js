function pets(input) {

    let days = Number(input[0]);
    let foodKG = Number(input[1]);
    let dogFoodDaily = Number(input[2]);
    let catFoodDaily = Number(input[3]);
    let turtleFoodDaily = Number(input[4]);

    let dog = dogFoodDaily * days;
    let cat = catFoodDaily * days;
    let turtle = (turtleFoodDaily / 1000) * days;
    let total = dog + cat + turtle;

    let leftFood = foodKG - total;
    let lackOfFood = total - foodKG;

    if (total <= foodKG) {
        console.log(`${Math.floor(leftFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(lackOfFood)} more kilos of food are needed.`);
    }

}
pets(['5', '10', '2.1', '0.8', '321'])

// •	Първи ред – брой дни – цяло число в интервал [1…5000]
// •	Втори ред – оставена храна в килограми – цяло число в интервал [0…100000]
// •	Трети ред – храна на ден за кучето в килограми – реално число в интервал [0.00…100.00]
// •	Четвърти ред – храна на ден за котката в килограми– реално число в интервал [0.00…100.00]
// •	Пети ред – храна на ден за костенурката в грамове – реално число в интервал [0.00…10000.00]
