function gameNumberWars(input) {

    let firstPlayer = input[0];
    let secondPlayer = input[1];
    let firstPPoints = 0;
    let secondPPoints = 0;
    let firstPTotal = 0;
    let secondPTotal = 0;

    for (let i =2; i < input.length; i += 2) {
        let curString = input[i];
        if (curString === 'End of game') {
            console.log(`${firstPlayer} has ${firstPTotal} points`);
            console.log(`${secondPlayer} has ${secondPTotal} points`);
            break;
        }
        let firstPCard = Number(input[i]);
        let secondPCard = Number(input[i + 1]);

        if (firstPCard > secondPCard) {
            firstPPoints = firstPCard - secondPCard;
            firstPTotal += firstPPoints;

        } else if (firstPCard < secondPCard) {
            secondPPoints = secondPCard - firstPCard;
            secondPTotal += secondPPoints

        } else {
            let firstPCard = Number(input[i + 2]);
            let secondPCard = Number(input[i + 3]);
            console.log(`Number wars!`);

            if (firstPCard > secondPCard) {
                console.log(`${firstPlayer} is winner with ${firstPTotal} points`);
                break;
            } else {
            }
            console.log(`${secondPlayer} is winner with ${secondPTotal} points`);
            break;
        }
    }
}
gameNumberWars(['Aleks', 'Georgi',
    '4', '5',
    '3', '2',
    '4', '3',
    '4', '4',
    '5', '2'
])