function touristShop(input) {
    let budget = Number(input[0]);
    let products = 0;
    let totalSum = 0;

    for (let i = 1; i < input.length; i++) {
        let curProduct = input[i];
        if (curProduct === 'Stop') {
            console.log(`You bought ${products} products for ${totalSum.toFixed(2)} leva.`);
            break;
        }

        i++
        let price = Number(input[i])

        products++ 
        if (products === 3 || products === 6 || products === 9 || products === 12 || products === 15 || products === 18 || products === 21) {
            price *= 0.50;
        }
        totalSum += price;

        if (budget < price) {
            let moneyLack = price - budget;
            console.log(`You don't have enough money!`);
            console.log(`You need ${moneyLack.toFixed(2)} leva!`);
        }
        budget -= price 
    }
 
}
touristShop(['153.20',
'Backpack','25.20',
'Shoes','54',
'Sunglasses','30',
'Stop'])
