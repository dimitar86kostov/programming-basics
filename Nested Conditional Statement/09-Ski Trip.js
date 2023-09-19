// "room for one person" – 18.00 лв за нощувка
// "apartment" – 25.00 лв за нощувка
// "president apartment" – 35.00 лв за нощувка
function skiTrip(input) {
    let days = Number(input[0]);
    let accommodationType = input[1];
    let review = input[2];

    let nights = days - 1;
    let price = 0;

    switch (accommodationType) {
        case "room for one person":
            price = 18 * nights;
            break;

        case "apartment":
            price = 25 * nights;
            if (days < 10) {
                price *= 0.70;
            } else if (days <= 15) {
                price *= 0.65;
            } else {
                price *= 0.50;
            }break;
        case 'president apartment':
            price = 35 * nights;
            if (days < 10) {
                price *= 0.90;
            } else if (days <= 15) {
                price *= 0.85;
            } else {
                price *= 0.80;
            }
            break;
    }

    if (review === "positive") {
        price *= 1.25;
    } else if ("negative") {
        price *= 0.90;
    }
    console.log(price.toFixed(2));
}
skiTrip(["2", "apartment", "positive"])

// if (days < 10) {
    //     price = price - price * 0.30;
    //     if (review === "positive") {
    //         price = price * 0.25 + price;
    //     } else if ("negative") {
    //         price = price - price * 0.10;
    //     } else if (days > 10 && days < 15) {
    //         price = price - price * 0.35;
    //         if (review === "positive") {
    //             price = price * 0.25 + price;
    //         } else if ("negative") {
    //             price = price - price * 0.10;
    //         } else if (days > 15) {
    //             price = price - price * 0.50;
    //             if (review === "positive") {
    //                 price = price * 0.25 + price;
    //             } else if ("negative") {
    //                 price = price - price * 0.10;
    //             }
    //             console.log(price.toFixed(2));
    //             break;