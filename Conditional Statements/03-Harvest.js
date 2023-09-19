function harvest(input){

let X_SquareMetters = Number(input[0]);
let Y_GrapePerSquareMetter = Number(input[1]);
let Z_WineForSale = Number(input[2]);
let countWorkers = Number(input[3]);

let totalGrape = X_SquareMetters * Y_GrapePerSquareMetter;
let wine = (0.4 * totalGrape) / 2.5;
let neededWine = Z_WineForSale - wine;
let wineLeft = wine - Z_WineForSale;
let wineForWorkers = (wineLeft / countWorkers);


if (wine <= Z_WineForSale){
    console.log(`It will be a tough winter! More ${Math.floor(neededWine)} liters wine needed.`);
}else if (wine >= Z_WineForSale){
    console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
    console.log(`${(Math.ceil(wineLeft))} liters left -> ${Math.ceil(wineForWorkers)} liters per person.`);
}
}
harvest(['650','2','175','3'])

// (['1020','1.5','425','4'])
// •	1ви ред: X кв.м е лозето – цяло число в интервала [10 … 5000]
// •	2ри ред: Y грозде за един кв.м – реално число в интервала [0.00 … 10.00]
// •	3ти ред: Z нужни литри вино – цяло число в интервала [10 … 600]
// •	4ти ред: брой работници – цяло число в интервала [1 … 20]

// total loze = 650 kv.m.
//  za wine = 260 kv.m.
// 1kv.m. = 2kg grozde
// za 1l wine sa nujni 2.5kg grozde
// jelano = 175

// 260 / 2 = 130kg
// 130 / 2.5 = 52l