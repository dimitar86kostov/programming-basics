function schoolCamp(input) {
    let season = input[0];
    let genderType = input[1];
    let studentsQuant = Number(input[2]);
    let nightsQuant = Number(input[3]);

    let price = 0;
    let sport = '';

    switch (season) {
        case 'Winter':
            if (genderType === 'girls' || genderType === 'boys') {
                price = nightsQuant * (studentsQuant * 9.60);
            } else if (genderType === 'mixed') {
                price = nightsQuant * (studentsQuant * 10);
            }
            break;

        case 'Spring':
            if (genderType === 'girls' || genderType === 'boys') {
                price = nightsQuant * (studentsQuant * 7.20);
            }else if (genderType === 'mixed') {
                price = nightsQuant * (studentsQuant * 9.50);
            }
            break;

        case 'Summer':
            if (genderType === 'girls' || genderType === 'boys') {
                price = nightsQuant * (studentsQuant * 15);
            }else if (genderType === 'mixed') {
                price = nightsQuant * (studentsQuant * 20);
            }
            break;
    }

    if (studentsQuant >= 10 && studentsQuant < 20) {
        price *= 0.95;
    }else if (studentsQuant >= 20 && studentsQuant < 50) {
        price *= 0.85;
    }else if (studentsQuant >= 50) {
        price *= 0.50;
    }

    switch (genderType) {
        case 'girls':
            if (season === "Winter") {
                sport = 'Gymnastics';
            }else if (season === 'Spring') {
                sport = 'Athletics';
            }else if (season === "Summer") {
                sport = 'Volleyball';
            }
            break;
    
        case 'boys':
            if (season === "Winter") {
                sport = 'Judo';
            }else if (season === 'Spring') {
                sport = 'Tennis';
            }else if (season === "Summer") {
                sport = 'Football';
            }
            break;
        case 'mixed':
            if (season === "Winter") {
                sport = 'Ski';
            }else if (season === 'Spring') {
                sport = 'Cycling';
            }else if (season === "Summer") {
                sport = 'Swimming';
            }
            break;
    }
console.log(`${sport} ${price.toFixed(2)} lv.`);
}
schoolCamp(['Spring', 'mixed', '17', '14'])
