function easterParty
    (params) {

    let guests = Number(params[0]);
    let price = Number(params[1]);
    let budget = Number(params[2]);

    let cake = budget * 0.10;

    if (guests >= 10 && guests <= 15) {
        price *= 0.85;
    } else if (guests >= 15 && guests <= 20) {
        price *= 0.80;
    } else if (guests > 20) {
        price *= 0.75;
    }
    let total = guests * price + cake;

    if (budget >= total) {
        let leftSum = budget - total;
        console.log(`It is party time! ${leftSum.toFixed(2)} leva left.`);
    } else {
        let lackSum = total - budget;
        console.log(`No party! ${lackSum.toFixed(2)} leva needed.`);
    }

}
easterParty(['18', '30', '450'])