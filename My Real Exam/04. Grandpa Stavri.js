function grandpaStavri(params) {
    let i = 0;
    let days = Number(params[i]);
    let litters = 0;
    let degreesSum = 0;
    let averageDegrees = 0;

    for (let curDay = 0; curDay < days; curDay++) {

        i++;
        let rakia = Number(params[i]);
        litters += rakia;

        i++;
        let degrees = Number(params[i]);;
        degreesSum += rakia * degrees;
    }


    averageDegrees = degreesSum / litters;
    console.log(`Liter: ${litters.toFixed(2)}`);
    console.log(`Degrees: ${averageDegrees.toFixed(2)}`);

    if (averageDegrees < 38) {
        console.log('Not good, you should baking!');
    } else if (averageDegrees <= 42) {
        console.log("Super!");
    } else if (averageDegrees > 42) {
        console.log("Dilution with distilled water!");

    }

}
grandpaStavri(["2",
    "200",
    "43",
    "200",
    "40"])


