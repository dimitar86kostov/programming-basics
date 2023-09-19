function footballKit(params) {
    let tshirtPrice = Number(params[0]);
    let goalPrice = Number(params[1]);

    let shorts = tshirtPrice * 0.75;
    let socks = shorts * 0.20;
    let shoes = (shorts + tshirtPrice) * 2;

    let sum = shorts + socks + shoes + tshirtPrice;
    sum *= 0.85;

    if (sum >= goalPrice) {
        console.log('Yes, he will earn the world-cup replica ball!');
        console.log(`His sum is ${sum.toFixed(2)} lv.`);
    }else{
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(goalPrice - sum).toFixed(2)} lv. more.`);
    }

   
}
footballKit(["25",
    "100"])
