function favoriteMovie(params) {
    let i = 0;

    let movie = params[0];
    let asciiScore = 0;
    let total = 0;
    


    while (movie !== 'STOP') {

        for (let cur = 0; cur < movie.length; cur++) {
            let digit = params[cur];
            let a = digit.charCodeAt(0)
            let b = digit.charCodeAt(1)
            let c = digit.charCodeAt(2)
            let d = digit.charCodeAt(3)
            let e = digit.charCodeAt(4)
            let f = digit.charCodeAt(5)
            asciiScore = a + b + c + d + e + f;
            let index = 0;
            let curChar = movie[index];
            
            if (isValid) {
                asciiScore -= movie.length
            } else {
                asciiScore -= (movie.length * 2)
            }
            total += asciiScore

        }
        i++;
    }

}
favoriteMovie(['Matrix',
    'Breaking bad',
    'Legend',
    'STOP',])