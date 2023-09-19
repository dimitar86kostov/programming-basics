function puppyCare(params) {
    let i = 0;

    let kgFood = Number(params[i]);
    i++;

    let grEat = params[i];

    let foodGr = kgFood * 1000;

    while (grEat !== 'Adopted') {
        grEat = Number(params[i]);

        foodGr -= grEat;
        i++;
        grEat = params[i];
    }
    if (foodGr >= 0) {
        console.log(`Food is enough! Leftovers: ${foodGr} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(foodGr)} grams more.`);
    }
}
puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
