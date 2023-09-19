function matchTickets(input) {
    let budget = Number(input[0]);
    let type = input[1];
    let countFans = Number(input[2]);

    let transport = 0;
    let ticketPrice = 0;
    let leftMoney = 0;
    let finalSum = 0;

    switch (type) {
        case 'Normal':
            ticketPrice = 249.99;
            if (countFans >= 1 && countFans <= 4) {
                transport = budget * 0.75;
            } else if (countFans <= 9) {
                transport = budget * 0.60;
            } else if (countFans <= 24) {
                transport = budget * 0.50;
            } else if (countFans <= 49) {
                transport = budget * 0.40;
            } else {
                transport = budget * 0.25;
            }
            leftMoney = budget - transport;
            finalSum = ticketPrice * countFans;
            if (finalSum < leftMoney) {
                let haveMore = leftMoney - finalSum; 
                console.log(`Yes! You have ${haveMore.toFixed(2)} leva left.`);
            } else {
                let lackMoney = finalSum - leftMoney;
                console.log(`Not enough money! You need ${lackMoney.toFixed(2)} leva.`);
            }
            break;
        case 'VIP':
            ticketPrice = 499.99;
            if (countFans >= 1 && countFans <= 4) {
                transport = budget * 0.75;
            } else if (countFans <= 9) {
                transport = budget * 0.60;
            } else if (countFans <= 24) {
                transport = budget * 0.50;
            } else if (countFans <= 49) {
                transport = budget * 0.40;
            } else {
                transport = budget * 0.25;
            }
            leftMoney = budget - transport;
            finalSum = ticketPrice * countFans;
            if (finalSum < leftMoney) {
                let haveMore = leftMoney - finalSum; 
                console.log(`Yes! You have ${haveMore.toFixed(2)} leva left.`);
            } else {
                let lackMoney = finalSum - leftMoney;
                console.log(`Not enough money! You need ${lackMoney.toFixed(2)} leva.`);
            }
            break;
    }
}


matchTickets(['1000', 'Normal', '1'])
// Not enough money! You need 12498.00 leva.
// (['1000', 'Normal', '1'])

// •	VIP – 499.99 лева.
// •	Normal – 249.99 лева.
// Запалянковците имат определен бюджет, а броят на хората в групата определя какъв процент от бюджета
// трябва да се задели за транспоrt От 1 до 4 – 75% от бюджета.
// •	От 5 до 9 – 60% от бюджета.
// •	От 10 до 24 – 50% от бюджета.
// •	От 25 до 49 – 40% от бюджета.
// •	50 или повече – 25% от бюджета.
