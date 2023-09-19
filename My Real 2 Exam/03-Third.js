function pastryShop(params) {

    let cake = params[0];
    let cakeQuant = Number(params[1]);
    let day = Number(params[2]);

    let sum = 0;

    switch (cake) {
        case 'Cake':
            if (day <= 15) {
                sum += 24;
            } else if (day > 15) {
                sum += 28.70;
            }
            break;

        case "Souffle":
            if (day <= 15) {
                sum += 6.66;
            } else if (day > 15) {
                sum += 9.80;
            }
            break;

        case "Baklava":
            if (day <= 15) {
                sum += sum += 12.60;
            } else if (day > 15) {
                sum += 16.98;
            }
            break;
    }

    let total = cakeQuant * sum;
    if (day <= 22) {
        if (total >= 100 && total <= 200) {
            total *= 0.85;
        }else if (total > 200) {
            total *= 0.75;
        }
    }
if (day <= 15) {
    total *= 0.90;
}
console.log(total.toFixed(2));
}
pastryShop(["Cake",
    "10",
    "15"])
