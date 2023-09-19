function walking(input) {
    let i = 0;

    let goal = 10000;

    let daily = input[i];

    let total = 0;

    while (daily !== "Going home") {
        daily = Number(daily);
        total += daily

        if (total >= goal) {
            break;
        }

        i++
        daily = input[i];
    }

    if (daily === "Going home") {
        i++
        daily = input[i];
        daily = Number(daily);
        total += daily
        if (total >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${total - goal} steps over the goal!`);
        } else {
            console.log(`${goal - total} more steps to reach goal.`);
        }
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${total - goal} steps over the goal!`);
    }

}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])



