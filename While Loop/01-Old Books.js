function oldBooks(input) {

    let i = 1;
    let theBook = input[0];
    let curBook = input[i];
    let count = 0;
    let theBookIsFound = false;

    while (curBook !== `No More Books`) {
        if (curBook === theBook) {
            theBookIsFound = true;
            break;
        }
        count++
        i++
        curBook = input[i];
    }
    if (theBookIsFound === false) {
        console.log('The book you search is not here!');
        console.log(`You checked ${count} books.`);
    } else {
        console.log(`You checked ${count} books and found it.`);
    }

}
oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])



