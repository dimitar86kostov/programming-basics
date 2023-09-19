function miningRig(params) {
    
let videocardPrice = Number(params[0]);
let transmitter = Number(params[1]);
let elPerCardDaily = Number(params[2]);
let incomeDaily = Number(params[3]);

let allCardsSum = videocardPrice * 13;
let allTransSum = transmitter * 13;
let totalCost = allCardsSum + allTransSum + 1000;
let income = incomeDaily - elPerCardDaily;
let totalIncome = 13 * income;

console.log(totalCost);
console.log(Math.ceil(totalCost / totalIncome));

}
miningRig(["700",
"15",
"0.20",
"2"])
