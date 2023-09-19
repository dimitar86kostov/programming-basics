function series(params) {
    let i = 0;

    let budget = Number(params[i]);
    i++;
    let quantSeries = Number(params[i]);
    let total = 0;

    for (let cur = 0; cur < quantSeries; cur++) {
        i++;
        let serialTitle = params[i];
        i++;
        let curPrice = Number(params[i]);
        if (serialTitle === 'Thrones') {
            curPrice *= 0.50;
        } else if (serialTitle === 'Lucifer') {
            curPrice *= 0.60;
        } else if (serialTitle === 'Protector') {
            curPrice *= 0.70;
        } else if (serialTitle === 'TotalDrama') {
            curPrice *= 0.80;
        } else if (serialTitle === 'Area') {
            curPrice *= 0.90;
        }

        total += curPrice;
    }

if (budget >= total) {
    let leftSum = budget - total;
    console.log(`You bought all the series and left with ${leftSum.toFixed(2)} lv.`);
}else{
    let lackSum = total - budget;
    console.log(`You need ${lackSum.toFixed(2)} lv. more to buy the series!`);
}

}
series(['10',
    '3',
    'Thrones',
    '5',
    'Riverdale',
    '5',
    'Gotham',
    '2'
])