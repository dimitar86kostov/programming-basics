function easterDecoration(params) {
    let i = 0;
    let clients = Number(params[i]);
    i++;
    let order = params[i];

    let basket = 1.50;
    let wreath = 3.80;
    let chocoBunny = 7;

    let average = 0;

    for (let row = 0; row < clients; row++) {
        let total = 0;
        let products = 0;
        
        while (order !== "Finish") {
            if (order === "basket") {
                total += basket;
                products++;
            } else if (order === "wreath") {
                total += wreath;
                products++;
            } else if (order === "chocolate bunny") {
                total += chocoBunny;
                products++;
            }
            i++;
            order = params[i];
        }

        if (products % 2 === 0) {
            total *= 0.80;
        }
        average += total;
        
        if (order === "Finish") {
            console.log(`You purchased ${products} items for ${total.toFixed(2)} leva.`);
        }
        i++;
        order = params[i];

    }


let finalSum = average / clients;
    console.log(`Average bill per client is: ${finalSum.toFixed(2)} leva.`);
}
easterDecoration([
    '2',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish'
])