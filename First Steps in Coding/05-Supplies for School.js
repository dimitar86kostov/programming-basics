function suppliesForSchool(input){

let pens = Number(input[0]);
let markers = Number(input[1]);
let chemicals = Number(input[2]);
let discount = Number(input[3]);
let discountPercent = discount / 100;

let numPens = pens * 5.80;
let numMarkers = markers * 7.20;
let numChemicals = chemicals * 1.20;


let materials = (numPens + numMarkers + numChemicals);
let sum = materials - (materials * discountPercent)


console.log(sum);
}
suppliesForSchool(["2","3","4","25"])

// Пакет химикали - 5.80 лв.

// • Пакет маркери - 7.20 лв.

// • Препарат - 1.20 лв (за литър)
// · Брой пакети химикали - цяло число в интервала [0...100]

// · Брой пакети маркери - цяло число в интервала [0...100]

// · Литри препарат за почистване на дъска - цяло число в интервала [0…50]

// · Процент намаление - цяло число в интервала [0...100]