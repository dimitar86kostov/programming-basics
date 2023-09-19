function catDiet(params) {
    
let fatsP = Number(params[0]);
let proteinsP = Number(params[1]);
let carbohydratesP = Number(params[2]);
let calories = Number(params[3]);
let water = Number(params[4]);

let gramFats = (fatsP * calories) / 900;
let gramsProteins = (proteinsP * calories) / 400;
let gramsCarbohydrates = (carbohydratesP * calories) / 400;

let foodWaight = (gramFats + gramsCarbohydrates + gramsProteins).toFixed(4);

let caloriesPerGram = calories / foodWaight;

let final = caloriesPerGram -((water * caloriesPerGram) / 100);




console.log(final.toFixed(4));
}
catDiet(["20",
"60",
"20",
"1800",
"50"])


