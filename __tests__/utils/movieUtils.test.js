const { getRandomMoviesByGenre, getTopRatedMovies, formatMovieData, getRandomGenre, generateMovieReport } = require("../../utils/movieUtils");

describe('Movie Utility Functions', () => {
    describe('getRandomMoviesByGenre', () => {
        test('returns the correct number of movies for a given genre', () => {
            const genre = Genres.ACTION;
            const count = 5;
            const movies = getMoviesByGenre(genre, count);
            expect(movies.length).toBe(count);
            expect(movies.every(movie => movie.genre === genre)).toBe(true);
        });

        test('returns an empty array for a genre with no movies', () => {
            const genre = 'NonExistentGenre';
            const movies = getMoviesByGenre(genre, 5);
            expect(movies).toEqual([]);
        });
    });

    
    describe('getTopRatedMovies', () => {
    
    });


    describe('getMovieDetailsById', () => {
        
    });

    describe('selectRandomMovieId', () => {

    });
});


getRandomMoviesByGenre