function easterEggs(params) {
    let i = 0;
    let eggs = Number(params[i]);
    i++
    let color = params[i];

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;
    let holder = '';

    while (i <= params.length) {
        if (color === 'red') {
            red++
            if (red > maxNum) {
                maxNum = red;
                holder = color
            }
        } else if (color === 'orange') {
            orange++
            if (orange > maxNum) {
                maxNum = orange;
                holder = color
            }
        } else if (color === 'blue') {
            blue++
            if (blue > maxNum) {
                maxNum = blue;
                holder = color
            }
        } else if (color === 'green') {
            green++
            if (green > maxNum) {
                maxNum = green;
                holder = color
            }
        }
        i++
        color = params[i];
    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxNum} -> ${holder}`);
}
easterEggs(['7',
    'orange',
    'blue',
    'green',
    'green',
    'blue',
    'red',
    'green',
])