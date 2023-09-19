function swimmingpool(input) {
let i = 0;
let workers = Number(input[i]);
i++;
let entrance = Number(input[i]);
i++;
let sunbed = Number(input[i]);
i++;
let sunShadow = Number(input[i]);

let total1 = 0;
let total2 = 0;
let total3 = 0;

total1 += workers * entrance;
total2 += sunbed * Math.ceil(workers * 0.75) ;
total3 += sunShadow * Math.ceil(workers / 2);

console.log(`${(total1 + total2 + total3).toFixed(2)} lv.`);

}
swimmingpool(["21",
"5.50",
"4.40",
"6.20"])



