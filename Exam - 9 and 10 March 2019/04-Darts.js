function darts(input) {

    let player = input[0];
    let score = 301;
    let currentScore = 0;
    let winShots = 0;
    let losShots = 0;

    for (let i = 1; i < input.length; i++) {
        let curString = input[i];
        if (curString === "Retire") {
            console.log(`${player} retired after ${losShots} unsuccessful shots.`);
            break;
        }

        if (curString === 'Single') {
            i++
            let curPoint = Number(input[i]);
            currentScore = curPoint;

            if (score <= 60) {
                if (score < currentScore) {
                    losShots++
                    
                }else{
                winShots++;
                score -= currentScore
                
                }
            }else{
                score -= currentScore
                winShots++;
            }

        } else if (curString === 'Double') {
            i++
            let curPoint = Number(input[i]);
            currentScore = curPoint * 2;

            if (score <= 60) {
                if (score < currentScore) {
                    losShots++
                    
                }else{
                winShots++;
                score -= currentScore
                
                }
            }else{
                score -= currentScore
                winShots++;
            }
        } else if (curString === 'Triple') {
            i++
            let curPoint = Number(input[i]);
            currentScore = curPoint * 3;

            if (score <= 60) {
                if (score < currentScore) {
                    losShots++

                } else {
                    winShots++;
                    score -= currentScore
                    
                }
            } else {
                score -= currentScore
                winShots++;
            }
        }
    }
    if (score === 0) {
        console.log(`${player} won the leg with ${winShots} shots.`);
    }
}
darts(['Michael van Gerwen',
    'Triple', '20',
    'Triple', '19',
    'Double', '10',
    'Single', '3',
    'Single', '1',
    'Triple', '20',
    'Triple', '20',
    'Double', '20',
])

// (['Rob Cross',
//     'Triple', '20',
//     'Triple', '20',
//     'Triple', '20',
//     'Triple', '20',
//     'Double', '20',
//     'Triple', '20',
//     'Double', '5',
//     'Triple', '10',
//     'Double', '6',
//     'Retire',
// ])