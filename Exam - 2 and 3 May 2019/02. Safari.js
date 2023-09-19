function safari(input) {
    let budget = Number(input[0]);
    let littersFuel = Number(input[1]);
    let day = input[2];

    let price = littersFuel * 2.10 + 100;

    if (day === 'Saturday') {
        price *= 0.90
    }else if (day === 'Sunday') {
        price *= 0.80
    }

    if (budget >= price) {
        let leftMoney = budget - price;
        console.log(`Safari time! Money left: ${leftMoney.toFixed(2)} lv. `);
    }else{
        let lackMoney = price - budget;
        console.log(`Not enough money! Money needed: ${lackMoney.toFixed(2)} lv.`);
    }
}
safari(['105.20', '15', 'Sunday'])