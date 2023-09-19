function fitness(params) {
    let i = 0;

    let clients = Number(params[i]);
    i++;
    
    
    let counterBack = 0;
    let counterChest = 0;
    let counterLegs = 0;
    let counterAbs = 0;
    let counterProShake = 0;
    let counterProBar = 0;
    let totalCount = 0;
    let totalCountBuyers = 0;

    for (let i = 1; i <= clients; i++) {
       let activity = params[i];
        switch (activity) {
            case 'Back':
                counterBack++
                totalCount++
                break;
            case 'Chest':
                counterChest++
                totalCount++
                break;
            case 'Legs':
                counterLegs++
                totalCount++               
                break;
            case 'Abs':
                counterAbs++
                totalCount++              
                break;
            case "Protein shake":
                counterProShake++
                totalCountBuyers++               
                break;
            case "Protein bar":
                counterProBar++
                totalCountBuyers++              
                break;
        }
    }

    let percentBuilders = (totalCount / clients) * 100;
    let percentBuyers = ((counterProShake + counterProBar) / clients) * 100;
    console.log(`${counterBack} - back`);
    console.log(`${counterChest} - chest`);
    console.log(`${counterLegs} - legs`);
    console.log(`${counterAbs} - abs`);
    console.log(`${counterProShake} - protein shake`);
    console.log(`${counterProBar} - protein bar`);
    console.log(`${percentBuilders.toFixed(2)}% - work out`);
    console.log(`${percentBuyers.toFixed(2)}% - protein`);
}
fitness(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])
