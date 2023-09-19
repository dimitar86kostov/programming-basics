// •	Магнолии – 3.25 лева
// •	Зюмбюли – 4 лева
// •	Рози – 3.50 лева
// •	Кактуси – 8 лева
// От общата сума, Мария трябва да плати 5% данъци.

function flowerShop(input) {

    let magnolii = Number(input[0]);
    let zyumbul = Number(input[1]);
    let roses = Number(input[2]);
    let cactus = Number(input[3]);
    let gift = Number(input[4]);

    let order = magnolii * 3.25 + zyumbul * 4 + roses * 3.50 + cactus * 8;
    let orderAfterTax = order - (0.05 * order)
    let leftMoney = orderAfterTax - gift;
    let lackMoney = gift - orderAfterTax;

    if (gift <= orderAfterTax) {
        console.log(`She is left with ${Math.floor(leftMoney)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(lackMoney)} leva.`);
    }
}
flowerShop(['15', '7', '5', '10', '100'])


// (['15', '7', '5', '10', '100'])
// (['2', '3', '5', '1', '50'])
// •	Брой магнолии – цяло число в интервала [0 … 50]
// •	Брой зюмбюли – цяло число в интервала [0 … 50]
// •	Брой рози – цяло число в интервала [0 … 50]
// •	Брой кактуси – цяло число в интервала [0 … 50]
// •	Цена на подаръка – реално число в интервала [0.00 … 500.00]
