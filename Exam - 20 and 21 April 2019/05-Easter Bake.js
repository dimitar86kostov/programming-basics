function easterBake(params) {
    
    let eastBreads = Number(params[0]);

    let packSugar = 950;
    let packFlour = 750;
    let countSugar = 0;
    let countFlour = 0;
    let maxSugar = Number.MIN_SAFE_INTEGER;
    let maxFlour = Number.MIN_SAFE_INTEGER;

    let i = 2;
    let gramSugar = Number(params[1]);
    let gramFlour = Number(params[2]);
    for (let curBread = 1; curBread <= eastBreads; curBread++) {
        
        countSugar += gramSugar;
        if (gramSugar > maxSugar) {
            maxSugar = gramSugar;
        }
        countFlour += gramFlour;
        if (gramFlour > maxFlour) {
            maxFlour = gramFlour;
        }
        i++;
        gramSugar = Number(params[i]);
        i++;
        gramFlour = Number(params[i]);
    }
console.log(`Sugar: ${Math.ceil(countSugar / packSugar)}`);
console.log(`Flour: ${Math.ceil(countFlour / packFlour)}`);
console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);


}
easterBake([
    '3',
    '400',
    '350',
    '250',
    '300',
    '450',
    '380',

])