function pcGameShop(params) {
    let i = 0;
    let seledGames = Number(params[i]);
    i++;
    let game = params[i];
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;;
    let others = 0;

    for (let i = 1; i <= seledGames; i++) {
        game = params[i];
        if (game == 'Hearthstone') {
            hearthstone++;
        } else if (game == 'Fornite') {
            fornite++;
        } else if (game == 'Overwatch') {
            overwatch++;
        } else {
            others++;
        }
    }
    let hearthstoneP = (hearthstone / seledGames) * 100;
    let forniteP = (fornite / seledGames) * 100;
    let overwatchP = (overwatch / seledGames) * 100;
    let othersP = (others / seledGames) * 100;
    console.log(`Hearthstone - ${hearthstoneP.toFixed(2)}%`);
    console.log(`Fornite - ${forniteP.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchP.toFixed(2)}%`);
    console.log(`Counter-Strike - ${othersP.toFixed(2)}%`);
}
pcGameShop([
    '4',
    'Hearthstone',
    'Fornite',
    'Overwatch',
    'Counter-Strike',

])