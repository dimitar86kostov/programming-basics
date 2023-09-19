function footballLeague(input) {
    
let capacity = Number(input[0]);
let fansQuantity = Number(input[1]);
let A = 0;
let B = 0;
let V = 0;
let G = 0;
let firstTeam = 0;
let secondTeam = 0;
let total = 0;

for (let i = 2; i <= fansQuantity + 1; i++) {
    let sector = input[i];
    switch (sector) {
        case 'A':
            A++
            firstTeam++
            break;
            case 'B':
            B++
            firstTeam++
            break;
            case 'V':
            V++
            secondTeam++
            break;
            case 'G':
            G++
            secondTeam++
            break;
    }
}
let percentA = ( A / fansQuantity) * 100;
let percentB = ( B / fansQuantity) * 100;
let percentV = ( V / fansQuantity) * 100;
let percentG = ( G / fansQuantity) * 100;
let percentTeams = ((firstTeam + secondTeam) / capacity) * 100;

console.log(`${percentA.toFixed(2)}%`);
console.log(`${percentB.toFixed(2)}%`);
console.log(`${percentV.toFixed(2)}%`);
console.log(`${percentG.toFixed(2)}%`);
console.log(`${percentTeams.toFixed(2)}%`);
}
footballLeague(['76','10','A','V','V','V','G','B','A','V','B','B'])