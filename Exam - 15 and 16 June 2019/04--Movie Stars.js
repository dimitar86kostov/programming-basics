function movieStars(input) {

let budget = Number(input[0]);
let actorFee = 0;

let total = 0;

for (let i = 1; i < input.length; i++) {
    let curActor = input[i];
    if (curActor === "ACTION") {
        break;
    }
    if (curActor.length <= 15) {
        i++
        let curFee = Number(input[i]);
        budget -= curFee; 
        total += curFee
    }else{
        actorFee = budget * 0.20;
        budget -= actorFee
        total += actorFee;
    }
    if (budget <= 0) {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
        break;
    }    
}

if (budget > 0){
    
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
}

}
movieStars(['170000',
'Ben Affleck','40000.50',
'Zahari Baharov','80000',
'Tom Hanks','2000.99',
'ACTION'])