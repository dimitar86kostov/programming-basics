function bills(input) {

    let months = Number(input[0]);
    let electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;

    let total = 0;

    for (let i = 1; i <= months; i++) {
        let curBill = Number(input[i]);

        electricity += curBill;
        water += 20;
        internet += 15;
    }
    
    other += (electricity + water + internet)
    other *= 1.20;
    total = electricity + water + internet + other;
    let average = total / months

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}
bills(['5', '68.63', '89.25', '132.53', '93.53', '63.22',])