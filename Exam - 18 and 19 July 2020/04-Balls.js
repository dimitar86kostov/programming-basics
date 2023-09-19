function balls(input) {

    let ballsQuant = Number(input[0]);
    let result = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherBalls = 0;
    let blackBalls = 0;


    for (let i = 1; i <= ballsQuant; i++) {
        let curBall = input[i];
        switch (curBall) {
            case 'red':
                result += 5;
                redBalls++
                break;
            case 'orange':
                result += 10;
                orangeBalls++;
                break;
            case 'yellow':
                result += 15;
                yellowBalls++
                break;
            case 'white':
                result += 20;
                whiteBalls++
                break;
            case 'black':
                result /= Math.floor(2);
                blackBalls++
                break;
            default:
                otherBalls++
                
        }
    }
console.log(`Total points: ${Math.floor(result)}`);
console.log(`Red balls: ${redBalls}`);
console.log(`Orange balls: ${orangeBalls}`);
console.log(`Yellow balls: ${yellowBalls}`);
console.log(`White balls: ${whiteBalls}`);
console.log(`Other colors picked: ${otherBalls}`);
console.log(`Divides from black balls: ${blackBalls}`);
}
balls(["10",
"white",
"white",
"ddd",
"red",
"orange",
"red",
"black",
"black",
"black",
"black",])
