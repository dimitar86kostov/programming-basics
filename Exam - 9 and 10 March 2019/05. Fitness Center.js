function fitnessCenter(params) {
    let i = 0;
    let ppl = Number(params[i]);
    i++;
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let averageWorkout = 0;
    let averageBuyers = 0;

    for (let a = 1; a < params.length; a++) {
        let curStr = params[a];
        if (curStr === 'Back') {
            back++;
            averageWorkout++
        } else if (curStr === 'Chest') {
            chest++;
            averageWorkout++
        } else if (curStr === 'Legs') {
            legs++;
            averageWorkout++
        } else if (curStr === 'Abs') {
            abs++;
            averageWorkout++
        } else if (curStr === 'Protein shake') {
            proteinShake++;
            averageBuyers++
        } else if (curStr === 'Protein bar') {
            proteinBar++;
            averageBuyers++
        }
    }
    let workoutP = (averageWorkout * 100) / ppl;
    let buyersP = (averageBuyers * 100) / ppl;
console.log(`${back} - back`);
console.log(`${chest} - chest`);
console.log(`${legs} - legs`);
console.log(`${abs} - abs`);
console.log(`${proteinShake} - protein shake`);
console.log(`${proteinBar} - protein bar`);
console.log(`${workoutP.toFixed(2)}% - work out`);
console.log(`${buyersP.toFixed(2)}% - protein`);


}
fitnessCenter(['10',
    'Back',
    'Chest',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar',
    'Protein shake',
    'Protein bar',
    'Legs',
    'Abs'
])