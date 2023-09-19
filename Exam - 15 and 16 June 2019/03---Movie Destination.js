function movieDestination(input){
let total = 0
let budget = Number(input[0]);
let destination = input[1];
let season = input[2];
let daysQuant = Number(input[3]);

if(destination == 'Dubai'){
    if(season == 'Winter'){
        total = (daysQuant * 45000) * 0.70;
    }else if(season == 'Summer'){
        total = (daysQuant * 40000) * 0.70;
    }
}if(destination == 'Sofia'){
    if(season == 'Winter'){
        total = daysQuant * 17000;
        total = total + (total * 0.25)
    }else if(season == 'Summer'){
        total = daysQuant * 12.500;
        total = total * 1.25
    }
}if(destination == 'London'){
    if(season == 'Winter'){
        total = daysQuant * 24000;
    }else if(season == 'Summer'){
        total = daysQuant * 20250;
    }
}
if(budget >= total){
    let moneyLeft = budget - total;
console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);
}else{
    let moneyLack = total - budget
    console.log(`The director needs ${moneyLack.toFixed(2)} leva more!`);
}
}
movieDestination(["1500000",
"Sofia",
"Summer",
"13"])

// The budget for the movie is enough! We have 1296875.00 leva left!

// Сезон	Dubai	      Sofia  	London
// Winter	45 000 lv.	17 000 lv.	24 000 lv.
// Summer	40 000 lv.	12 500 lv.	20 250 lv.

// •	Ако дестинацията е Дубай – 30% отстъпка от крайната цена
// •	Ако дестинацията е София – цената се оскъпява с 25%