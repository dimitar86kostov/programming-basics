// Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цен
// Ако Нели купи повече от 90 Далии - 15% отстъпка от крайната цен
// Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цен
// Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15
// Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%

// Роза  Далия  Лале   Нарцис Гладиола
//  5    3.80   2.80    3      2.50
function newHouse(input) {
    let flowersType = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (flowersType) {
        case 'Roses':
            price = 5 * countFlowers 
         break;
        case 'Dahlias':
            price = 3.80 * countFlowers;
             break;
        case 'Tulips':
            price = 2.80 * countFlowers 
         break
        case "Narcissus":
            price = 3 * countFlowers ;
                
             break;
        case 'Gladiolus':
            price = 2.50 * countFlowers;
             break;
        }
 
        if (countFlowers > 80 && flowersType === 'Roses') {
            price *= 0.90;
        }else if (countFlowers > 90 && flowersType === 'Dahlias') {
            price *= 0.85
        }else if (countFlowers > 80 && flowersType === 'Tulips') {
            price *= 0.85
        }else if (countFlowers < 120 && flowersType === "Narcissus") {
            price *= 1.15
        }else if (countFlowers < 80 && flowersType === 'Gladiolus' ) {
            price *= 1.20
        }

            if (budget >= price) {
                let leftMoney = budget - price;
                console.log(`Hey, you have a great garden with ${countFlowers} ${flowersType} and ${leftMoney.toFixed(2)} leva left.`);
            } else {
                let lackMoney = price - budget;
                console.log(`Not enough money, you need ${lackMoney.toFixed(2)} leva more.`);
            }
        }
    
    newHouse(["Narcissus", "119", "360"])

     // if (countFlowers > 80) {
            //     roses *= 0.90;
            //     tulips *= 0.85
            // } else if (countFlowers > 90) {
            //     dahlias *= 0.85;
            // } else if (countFlowers < 120) {
            //     narcissus *= 1.15;
            // } else if (countFlowers < 80) {
            //     gladiolus *= 1.20;