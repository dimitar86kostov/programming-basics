function shoping(params) {
    let budget = Number(params[0]);
    let videoCards = Number(params[1]);
    let processors = Number(params[2]);
    let ram = Number(params[3]);
 
    let total = 0;

    let vidSum = videoCards * 250;
   
    let proSum = processors * (vidSum * 0.35);

    let ramSum = ram * (vidSum * 0.10);

    total = vidSum + proSum + ramSum;

    if (videoCards > processors) {
        total *= 0.85;
    }

    if (budget >= total) {
        let leftSum = budget - total;
        console.log(`You have ${leftSum.toFixed(2)} leva left!`);
    }else{
        let lackSum = total - budget;
        console.log(`Not enough money! You need ${lackSum.toFixed(2)} leva more!`);
    }

}
shoping(["920.45",
"3",
"1",
"1"])
