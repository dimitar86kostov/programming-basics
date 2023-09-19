function easterLunch
    (params) {

    let coz = Number(params[0]);
    let eggs = Number(params[1]);
    let kgBiscuit = Number(params[2]);

    let cozPrice = 3.20;
    let eggsPrice = 4.35;
    let biscuitPrice = 5.40;
    let paintPrice = 0.15;

    let total = coz * cozPrice + eggs * eggsPrice + kgBiscuit * biscuitPrice;
    total += paintPrice * (eggs * 12);

    console.log(total.toFixed(2));

}
easterLunch(['3', '2', '3'])