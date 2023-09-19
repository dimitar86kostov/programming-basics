function happyCatParking(params) {

    let day = Number(params[0]);
    let hour = Number(params[1]);
    let sum = 0;
    let total = 0;
    let counter = 1;

    while (counter !== day + 1) {
        for (let i = 1; i <= hour; i++) {
            let curH = Number(i);
            if (counter % 2 === 0) {
                if (curH % 2 !== 0) {
                    sum += 2.50;
                    
                } else if (curH % 2 === 0) {
                    sum += 1;
                    
                }

            } else if (counter % 2 !== 0) {
                if (curH % 2 === 0) {
                    sum += 1.25;
                    
                } else if (curH % 2 !== 0) {
                    sum += 1;
                    
                }

            }
        }
        console.log(`Day: ${counter} - ${sum.toFixed(2)} leva`);
        total += sum;
        sum = 0;
        counter++;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}
happyCatParking([
    '5',
    '2'
])