function oscarsCeremony(input){

let rent = Number(input[0]);

let statuets = rent - 0.30 * rent;
let cetering = statuets - statuets * 0.15;
let sound = 1 /2 * cetering;

let total = rent + statuets + cetering + sound;

console.log(total.toFixed(2));

}
oscarsCeremony(['5555'])
// •	Статуетки  – цената им е 30% по-малка от наема на залата
// •	Кетъринг – цената му е 15% по-малка от тази на статуетките
// •	Озвучаване – цената му е 1 / 2 от цената за кетъринг
