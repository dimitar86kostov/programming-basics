function seriesCalculator(input) {

    let movieTitle = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let timeing = Number(input[3]);

    let adds = 0.20 * timeing;
    let timeingWithAdds = timeing + adds;
    let specialEpisode = seasonsCount * 10;

    if (movieTitle === 'Lucifer') {
        let total = seasonsCount * episodesCount * timeingWithAdds + specialEpisode;
        console.log(`Total time needed to watch the ${movieTitle} series is ${Math.floor(total)} minutes.`);
    } else if (movieTitle === 'Game of Thrones') {
        let total = seasonsCount * episodesCount * timeingWithAdds + specialEpisode;
        console.log(`Total time needed to watch the ${movieTitle} series is ${Math.floor(total)} minutes.`);
    } else if (movieTitle === 'Riverdale') {
        let total = seasonsCount * episodesCount * timeingWithAdds + specialEpisode;
        console.log(`Total time needed to watch the ${movieTitle} series is ${Math.floor(total)} minutes.`);
    }

}
seriesCalculator(['Lucifer', '3', '18', '55'])

// реклами, които са с продължителност 20% от времето на един епизод.
// Също така знаете, че всеки сезон завършва със специален епизод,
// който е с 10м по-дълъг от обичайното. 

