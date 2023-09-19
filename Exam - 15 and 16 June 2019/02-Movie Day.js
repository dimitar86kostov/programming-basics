function movieDay(input) {

    let actionTime = Number(input[0]);
    let countShots = Number(input[1]);
    let timeingPerShot = Number(input[2]);
    let terrainPreparing = 0.15 * actionTime;
    let total = countShots * timeingPerShot;
    let time = actionTime - terrainPreparing;
  
    if (time >= total) {
        let timeLeft = time - total;
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(timeLeft)} minutes left!`);
    }else{
        let timeLack = total - time;
        console.log(`Time is up! To complete the movie you need ${timeLack} minutes.`);
    }

}
movieDay(["89",
"9",
"2"])



// 1.	Време за снимки – цяло число в диапазона [0… 1440]
// 2.	Брой сцени  – цяло число в диапазона [5… 25]
// 3.	Времетраене на сцена – цяло число в диапазона [20… 90]
