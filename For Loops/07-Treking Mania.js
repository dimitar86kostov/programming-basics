// •	Група до 5 човека – изкачват Мусала
// •	Група от 6 до 12 човека – изкачват Монблан
// •	Група от 13 до 25 човека – изкачват Килиманджаро
// •	Група от 26 до 40 човека –  изкачват К2
// •	Група от 41 или повече човека – изкачват Еверест
function trekingMania(input) {

    let groupsCount = Number(input[0]);

    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    let totalPpl = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let curPeople = Number(input[i]);
        
        if (curPeople <= 5) {
            musala += curPeople;
            totalPpl += curPeople
        } else if (curPeople <= 12) {
            montBlanc += curPeople;
            totalPpl += curPeople
        } else if (curPeople <= 25) {
            kilimanjaro += curPeople;
            totalPpl += curPeople
        } else if (curPeople <= 40) {
            k2 += curPeople;
            totalPpl += curPeople
        } else if (curPeople >= 41) {
            everest += curPeople;
            totalPpl += curPeople
        }
    
    }
 let percentMusala = (musala / totalPpl) * 100;
 console.log(`${percentMusala.toFixed(2)}%`);

 let percentMontBlanc = (montBlanc / totalPpl) * 100;
 console.log(`${percentMontBlanc.toFixed(2)}%`);

 let percentKilimanjaro = (kilimanjaro / totalPpl) * 100;
 console.log(`${percentKilimanjaro.toFixed(2)}%`);

 let percentK2 = (k2 / totalPpl) * 100;
 console.log(`${percentK2.toFixed(2)}%`);

 let percentEverest = (everest / totalPpl) * 100;
 console.log(`${percentEverest.toFixed(2)}%`);

}
trekingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])


