function basketballEquipment(input){

let annualTax = Number(input[0]);

let shoes = annualTax - (annualTax * 0.40);
let equip = shoes - (shoes * 0.20);
let ball = equip * 0.25;
let acsesoars = ball * 0.20;

let sum = annualTax + shoes + equip + ball + acsesoars;

console.log(sum);

}

basketballEquipment(["550"])

// Баскетболни кецове – цената им е 40% по-малка от таксата за една година

// • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете

// • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип

// • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка