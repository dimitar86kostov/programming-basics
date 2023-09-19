function cinemaVoucher(input) {

    let voucherValue = Number(input[0]);
    let purchases  = 0;
    let tickets = 0;
    let priceAscii = 0;

    for (let i = 1; i < input.length; i++) {
        let order = input[i];

        if (order.length > 8) {
            let a = order.charCodeAt(0);
            let b = order.charCodeAt(1);
            priceAscii = a + b;
            if (order === 'End' || priceAscii >= voucherValue) {
                break;
            }
            tickets++
            voucherValue -= priceAscii

        } else if (order.length <= 8) {
            let c = order.charCodeAt(0);
            if (order === 'End' || c >= voucherValue) {
                break;
            }
            purchases ++
            voucherValue -= c;
        }
    }
console.log(tickets);
console.log(purchases );
}
cinemaVoucher(['1500',
    'Avengers: Endgame',
    'Bohemian Rhapsody',
    'Deadpool 2',
    'End'
])