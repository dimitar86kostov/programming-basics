function cake(input) {
    let index = 0;

    let width = Number(input[index]);
    index++

    let hight = Number(input[index]);
    index++

    let total = width * hight;

    let takenPieces = input[index];
    index++

    while (takenPieces !== 'STOP') {
        takenPieces = Number(takenPieces);
        total -= takenPieces;

        if (total <= 0) {
            break;
        }
        
        takenPieces = input[index];
        index++
    }

    if (takenPieces === 'STOP') {
        console.log(`${total} pieces are left.`);
    }
    if (total <= 0) {
        console.log(`No more cake left! You need ${Math.abs(total)} pieces more.`);
    }

    

}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

