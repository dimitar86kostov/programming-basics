function suitcasesLoad(params) {
    let i = 0;
    let capacity = Number(params[i]);
    i++;
    let volumeStr = params[i];
    let counter = 0;
    let total = 0;
    let countSuitcases = 0;

    while (volumeStr !== 'End') {
        
        let volume = Number(volumeStr);
        counter++;
        
        if (counter === 3) {
            volume *= 1.10;
            counter = 0;
        }
        total += volume;
        if (total > capacity) {
            
            break;
        }
        countSuitcases++

        i++;
        volumeStr = params[i];
        
        if (i >= params.length) {
            break;
        }
    }

    if (volumeStr === 'End') {
        console.log(`Congratulations! All suitcases are loaded!`);
    }
    if (total > capacity) {
        console.log("No more space!");
    }
console.log(`Statistic: ${countSuitcases} suitcases loaded.`);
}
suitcasesLoad([
    '1900',
    '180',
    '340.6',
    '126',
    '220',
    
])