function easterEggsBattle(params) {
    let i = 0;
    let first = Number(params[i]);
    i++;
    let second = Number(params[i]);
    i++;
    let winner = params[i];

    while (winner !== "End") {
        if (winner === "one") {
            second--;
            if (second === 0) {
                break;
            }
        } else if (winner === "two") {
            first--;
            if (first === 0) {
                break;
            }
        }
        i++;
        winner = params[i];
    }
    if (first === 0) {
        console.log(`Player one is out of eggs. Player two has ${second} eggs left.`);
    } else if (second === 0) {
        console.log(`Player two is out of eggs. Player one has ${first} eggs left.`);
    } else if (winner === "End") {
        console.log(`Player one has ${first} eggs left.`);
        console.log(`Player two has ${second} eggs left.`);
    }

}
easterEggsBattle([
    '5',
    '4',
    'one',
    'two',
    'one',
    'two',
    'two',
    'End',
])