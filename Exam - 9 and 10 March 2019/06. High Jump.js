function highJump(params) {
    let i = 0;
    let mainGoal = Number(params[i]);
    i++;
    let jump = Number(params[i]);
    let curGoal = mainGoal - 30;
    let counter = 0;
    let countWin = 0;
    let countLose = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;



    for (let curJump = 1; curJump <= params.length; curJump++) {
        counter++;
        if (jump > curGoal) {
            maxNum = jump;
            curGoal += 5;
            countWin++;
            countLose = 0;
        } else {
            countLose++
            if (countLose === 3) {
                break;
            }
        }
        
        i++;
        jump = Number(params[i]);
    }
    if (jump < mainGoal) {
        console.log(`Tihomir failed at ${curGoal}cm after ${counter} jumps.`);
    }else{
        console.log(`Tihomir succeeded, he jumped over ${mainGoal}cm after ${counter} jumps.`);
    }
}
highJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"])
