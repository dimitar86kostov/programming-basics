function bestPlayer(params) {
    let i = 0;

    let player = params[i];
    
    
    let maxNum = Number.MIN_SAFE_INTEGER;
    let holder = 0;

    while (player !== "END") {
        if (params.length <= i) {
            break;
        }
        i++;
        let goals = Number(params[i]);
        if (goals > maxNum) {
            maxNum = goals;   
            holder = player;        
        }
        i++;
        player = params[i];
    }
    console.log(`${holder} is the best player!`);

    if (maxNum >= 3) {
        console.log(`He has scored ${maxNum} goals and made a hat-trick !!!`);
    }else{
        console.log(`He has scored ${maxNum} goals.`);
    }
}
bestPlayer(["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END"])




