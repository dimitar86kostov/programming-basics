function hairSalon(params) {
    let i = 0;
    let goal = Number(params[i]);
    i++
    let type = params[i];
    let cut = '';
    let col = '';
    let sum = 0;

    while (type !== "closed") {

        switch (type) {
            case "haircut":
                i++;
                cut = params[i];
                if (cut === "mens") {
                    sum += 15;
                } else if (cut === "ladies") {
                    sum += 20;
                } else if (cut === "kids") {
                    sum += 10;
                }
                break;
            case "color":
                i++;
                col = params[i];
                if (col === "touch up") {
                    sum += 20;
                } else if (col === "full color") {
                    sum += 30;
                }
                break;
        }
        if (sum >= goal) {
            break;
        }
        i++
        type = params[i];
    }
    if (sum >= goal) {
        console.log('You have reached your target for the day!');
    } else {
        console.log(`Target not reached! You need ${goal - sum}lv. more.`);
    }
    console.log(`Earned money: ${sum}lv.`);
}
hairSalon(["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"])
