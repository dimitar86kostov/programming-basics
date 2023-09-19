

function mobileOperator() {
    let contractPeriod = input[0];
    let contractType = input[1];
    let extraNet = input[2];
    let monthsToBePayed = Number(input[3]);

    let price = 0;

    switch (contractType) {
        case 'Small':
            if (contractPeriod === 'one') {
                price = 9.98;
            } else if (contractPeriod === 'two') {
                price = 8.58;
            }
            break;

        case 'Middle':
            if (contractPeriod === 'one') {
                price = 18.99;
            } else if (contractPeriod === 'two') {
                price = 17.09;
            }
            break;
        case 'Large':
            if (contractPeriod === 'one') {
                price = 25.98;
            } else if (contractPeriod === 'two') {
                price = 23.59;
            }
            break;
        case 'ExtraLarge':
            if (contractPeriod === 'one') {
                price = 35.99;
            } else if (contractPeriod === 'two') {
                price = 31.79;
            }
            break;
    }

    if (extraNet === 'yes') {
        if (price <= 10) {
            price += 5.50;
        } else if (price <= 30) {
            price += 4.35;
        } else {
            price += 3.85;
        }
    }
    if (contractPeriod === 'two') {
            price = price - price * 0.0375;
        }
        price = monthsToBePayed * price;
        console.log(`${price.toFixed(2)} lv.`);
}
    mobileOperator(['two', 'Small', 'yes', '20'])