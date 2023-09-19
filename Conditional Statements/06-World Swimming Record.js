function worldSwimmingRecord(input){

let worldRecord = Number(input[0]);
let distanceMeters = Number(input[1]);
let timeForMeter = Number(input[2]);

let swimmingSeconds = distanceMeters * timeForMeter;

let waterResistance = Math.floor(distanceMeters / 15) * 12.5;

let totalTime = swimmingSeconds + waterResistance;

let timeGap = totalTime - worldRecord;

if (worldRecord > totalTime) {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
}else{
    console.log(`No, he failed! He was ${timeGap.toFixed(2)} seconds slower.`);
}
}
worldSwimmingRecord(["55555.67",

"3017","5.03"])
// -рекордът в секунди
// -разстоянието в метри, което трябва да преплува
// -времето в секунди, за което плува разстояние от 1 м. 
// Да се напише функция, която изчислява дали се е справил със задачата, като се има предвид, 
// че: съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. 
// Когато се изчислява колко пъти Иванчо ще се забави, 
// в резултат на съпротивлението на водата, резултатът трябва да се закръгли надолу 
// до най-близкото цяло число.