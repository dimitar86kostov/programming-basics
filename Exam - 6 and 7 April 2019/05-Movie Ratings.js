function movieRatings(params) {
    let i = 0;
    let quantity = Number(params[i]);
    i++;
    let maxRating = Number.MIN_SAFE_INTEGER;
    let average = 0;
    let minRating = Number.MAX_SAFE_INTEGER;
    let holderMax = '';
    let holderMin = '';


    while (i < params.length) {
        let movieTitle = params[i];
        i++
        let rating = Number(params[i]);
        average += rating;
        if (rating > maxRating) {
            maxRating = rating;
            holderMax = movieTitle;
        }
        if (rating < minRating) {
            minRating = rating;
            holderMin = movieTitle;
        }
        i++;
        movieTitle = params[i];
    }
    let averageP = (average / quantity) ;
console.log(`${holderMax} is with highest rating: ${maxRating.toFixed(1)}`);
console.log(`${holderMin} is with lowest rating: ${minRating.toFixed(1)}`);
console.log(`Average rating: ${averageP.toFixed(1)}`);
}
movieRatings(['5',
    'A Star is Born', '7.8',
    'Creed 2', '7.3',
    'Mary Poppins', '7.2',
    'Vice', '7.2',
    'Captain Marvel', '7.1',])