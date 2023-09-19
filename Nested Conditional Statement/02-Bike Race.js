function bikeRace(input) {
    let juniorQuant = Number(input[0]);
    let seniorQuant = Number(input[1]);
    let trasse = input[2];

    let priceJunior = 0;
    let priceSenior = 0;
    let sum = 0;

    switch (trasse) {
        case 'trail':
          sum =  juniorQuant * 5.50 + seniorQuant * 7;
            
            break;

        case 'cross-country':
            sum = juniorQuant * 8 + seniorQuant * 9.50;
            
            if (juniorQuant + seniorQuant >= 50) {
                sum *= 0.75;
            }
            break;

        case 'downhill':
           sum =  juniorQuant * 12.25 + seniorQuant * 13.75;
           
            break;

        case 'road':
            sum = juniorQuant * 20 + seniorQuant * 21.50;
            break;
    }
    sum *= 0.95;
    console.log(`${sum.toFixed(2)}`);

}
bikeRace(['10', '10', 'downhill'])
// Група	trail	cross-country	downhill	road
// juniors	5.50	8	           12.25	         20
// seniors	7	   9.50	           13.75	                21.50
// Ако в "cross-country" състезанието се съберат 50 или повече участника(общо младши и старши),
// таксата  намалява с 25%. Организаторите отделят 5% процента от събраната сума за разходи.
