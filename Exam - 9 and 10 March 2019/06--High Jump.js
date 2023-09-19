function highJump(params) {
    let i = 0;
    let goal = Number(params[i]);
    i++;
    let curJump = Number(params[i]);
    let jumpCount = 0;
    let totalJump = 0;
    let loseJumps = 0;
    let curGoal = goal - 30;

    for (let jump = 0; jump < params.length; jump++) {
        jumpCount++;

        if (curJump > curGoal) {
            curGoal += 5
            totalJump++;
            loseJumps = 0;
            if (curJump > goal) {
                console.log(`Tihomir succeeded, he jumped over ${goal}cm after ${jumpCount} jumps.`);
            }
        }else if (curJump <= curGoal) {
            loseJumps++;
            totalJump++;
            if (loseJumps === 3) {
                console.log(`Tihomir failed at ${curGoal}cm after ${totalJump} jumps.`);
                break;
            }
        }
        i++;
        curJump = Number(params[i]);
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

