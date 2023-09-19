function dogCare(params) {
    let i = 0;
    let foodKg = Number(params[i]);
    i++;
    let foodGr = foodKg * 1000;
    let row = params[i];
    let total = 0;

    while (row !== `Adopted`) {
        let eatenFoodGr = Number(row);
        
        total += eatenFoodGr;
        i++;
        row = params[i];
    }
    if (foodGr >= total) {
        let leftFood = total - foodGr
        console.log(`Food is enough! Leftovers: ${Math.abs(leftFood)} grams.`);
    } else if (foodGr < total) {
        let lackFood = total - foodGr;
        console.log(`Food is not enough. You need ${Math.abs(lackFood)} grams more.`);
    }

}

dogCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
