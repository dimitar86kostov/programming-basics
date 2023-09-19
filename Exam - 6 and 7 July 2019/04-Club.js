function club(input) {

let moneyWanted = Number(input[0]);

let sum = 0;
let price = 0;
let cocPrice = 0;

for (let i = 1; i < input.length; i++) {
    let curCoctayl = input[i];

    if (curCoctayl === 'Party!') {
        let moneyLack = moneyWanted - sum;
        console.log(`We need ${moneyLack.toFixed(2)} leva more.`);
        break;
    }
    if (sum >= moneyWanted) {
        console.log(`Target acquired.`);
    }
    price = curCoctayl.length;
    i++;
    let quantityOrder = Number(input[i]);
    cocPrice = price * quantityOrder;
    if (cocPrice % 2 !== 0) {
        cocPrice *= 0.75;
    }
    sum += cocPrice;
}
if (sum >= moneyWanted) {
    console.log(`Target acquired.`);
}
console.log(`Club income - ${sum.toFixed(2)} leva.`);
    
}
club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
