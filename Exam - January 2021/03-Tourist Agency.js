function turAgency(params) {
    let town = params[0];
    let type = params[1];
    let hasVip = params[2];
    let days = Number(params[3]);

    let price = 0;
    let dailyPrice = 0;

    switch (town) {
        case "Bansko":
            if (type === "noEquipment") {
                dailyPrice = 80;
                if (hasVip === "yes") {
                    dailyPrice *= 0.95;
                }
            } else if (type === "withEquipment") {
                dailyPrice = 100;
                if (hasVip === "yes") {
                    dailyPrice *= 0.90;
                }
            }
            break;
        case "Borovets":
            if (type === "noEquipment") {
                dailyPrice = 80;
                if (hasVip === "yes") {
                    dailyPrice *= 0.95;
                }
            } else if (type === "withEquipment") {
                dailyPrice = 100;
                if (hasVip === "yes") {
                    dailyPrice *= 0.90;
                }
            }
            break;
        case "Varna":
            if (type === "withBreakfast") {
                dailyPrice = 130;
                if (hasVip === "yes") {
                    dailyPrice *= 0.88;
                }
            } else if (type === "noBreakfast") {
                dailyPrice = 100
                if (hasVip === "yes") {
                    dailyPrice *= 0.93;
                }
            }
            break;
        case "Burgas":
            if (type === "withBreakfast") {
                dailyPrice = 130;
                if (hasVip === "yes") {
                    dailyPrice *= 0.88;
                }
            } else if (type === "noBreakfast") {
                dailyPrice = 100
                if (hasVip === "yes") {
                    dailyPrice *= 0.93;
                }
            }
            break;
        default:
            console.log("Invalid input!");
            break;
    }

    price = dailyPrice * days;

    if (days > 7) {
        price -= dailyPrice;
    }

    if (days < 1) {
        console.log('Days must be positive number!');
    }
    console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
}
turAgency(["Burgas",
"noBreakfast",
"no",
"4"])



