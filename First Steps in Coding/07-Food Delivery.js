function foodDelivery(input){

let chickenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let vegyMenu = Number(input[2]);

let price = chickenMenu * 10.35 + fishMenu * 12.40 + vegyMenu * 8.15;

let desert = 0.20 * price;
let delivery = 2.50;

let totalSum = price + desert + delivery;

console.log(totalSum);

}

foodDelivery(["2","4","3"])

// · Брой пилешки менюта – цяло число в интервала [0 … 99]

// · Брой менюта с риба – цяло число в интервала [0 … 99]

// · Брой вегетариански менюта – цяло число в интервала [0 … 99]
// • Пилешко меню – 10.35 лв.

// • Меню с риба – 12.40 лв.

// • Вегетарианско меню – 8.15 лв.