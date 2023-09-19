function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let location = '';
    let accommodation = ''; 

    switch (season) {
        case 'Summer':
            if (budget <= 1000) {
                accommodation = 'Camp';
                location = 'Alaska';
                price = budget * 0.65;
            }else if (budget > 1000 && budget <= 3000) {
                accommodation = 'Hut';
                location = 'Alaska';
                price = budget * 0.80;
            }else{
                accommodation = 'Hotel';
                location = 'Alaska';
                price = budget * 0.90;
            }
            break;
    
        case 'Winter':
            if (budget <= 1000) {
                accommodation = 'Camp';
                location = 'Morocco';
                price = budget * 0.45;
            }else if (budget > 1000 && budget <= 3000) {
                accommodation = 'Hut';
                location = 'Morocco';
                price = budget * 0.60;
            }else{
                accommodation = 'Hotel';
                location = 'Morocco';
                price = budget * 0.90;
            }
            break;
    }
    console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`);
}
vacation(['800','Summer'])
// •	При бюджет по-малък или равен от 1000лв.:
// o	Настаняване в "Camp"
// o	Според сезона локацията ще е една от следните и ще струва определен процент от бюджета:
// 	Лято – Аляска – 65% от бюджета
// 	Зима – Мароко – 45% от бюджета

// •	При бюджет по-голям от 1000лв. и по-малък или равен от 3000лв.:
// o	Настаняване в "Hut"
// o	Според сезона локацията ще е една от следните и ще струва определен процент от бюджета:
// 	Лято – Аляска – 80% от бюджета
// 	Зима – Мароко – 60% от бюджета

// •	При бюджет по-голям от 3000лв.:
// o	Настаняване в "Hotel"
// o	Според сезона локацията ще е една от следните и ще струва 90% от бюджета:
// 	Лято – Аляска
// 	Зима – Мароко
