function beerAndChips(params) {
    
    let fanName = params[0];
    let budget = Number(params[1]);
    let beerBotles = Number(params[2]);
    let chips = Number(params[3]);

    let beerPrice = 1.20;
let totalBeers = beerBotles * beerPrice;
let totalChips = Math.ceil(chips * (totalBeers * 0.45));
let totalSum = totalBeers + totalChips;

if (budget >= totalSum) {
    console.log(`${fanName} bought a snack and has ${(budget - totalSum).toFixed(2)} leva left.`);
}else{
    console.log(`${fanName} needs ${(totalSum - budget).toFixed(2)} more leva!`);
}

}
beerAndChips(["George",
"10",
"2",
"3"])
