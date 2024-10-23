const {getTopRatedMovies,getMoviesByGenre,getMovieDetailsById,selectRandomMovieId,getRandomUpcomingMovies,getRandomMovies} = require("../../utils/movieUtils");
const { Movies, Genres } = require("../../utils/data");

describe('Movie Utility Functions', () => {

    describe('getMoviesByGenre', () => {
        test('returns the correct number of movies for a given genre', () => {
            const genre = Genres.ACTION; 
            const count = 5;
            const movies = getMoviesByGenre(genre, count);
            expect(movies.length).toBe(count);
            expect(movies.every(movie => movie.genre === genre)).toBe(true);
        });       
    });
    
    describe('getTopRatedMovies', () => {
        test('returns top rated movies sorted by rating', () => {
            const movies = getTopRatedMovies(5); 
            expect(movies).toBeInstanceOf(Array);
            expect(movies.length).toBeGreaterThan(0);
            expect(movies).toEqual(movies.sort((a, b) => b.rating - a.rating));
        });
    });

    describe('selectRandomMovieId', () => {
        test('returns a valid movie ID from the list', () => {
            const movieIds = Movies.map(movie => movie.id); 
            const randomId = selectRandomMovieId();
            expect(movieIds).toContain(randomId);
        });
    });

    describe('getRandomUpcomingMovies', () => {
        test('returns an array of 5 unique random upcoming movies', () => {
            const movies = getRandomUpcomingMovies();
            expect(movies.length).toBe(5);
            const movieIds = movies.map(movie => movie.id);
            const uniqueIds = new Set(movieIds);
            expect(uniqueIds.size).toBe(5); 
        });
    });

    describe('getRandomMovies', () => {
        test('returns an array of 9 unique random movies', () => {
            const movies = getRandomMovies();
            expect(movies.length).toBe(9);
            const movieIds = movies.map(movie => movie.id);
            const uniqueIds = new Set(movieIds);
            expect(uniqueIds.size).toBe(9); 
        });
    });
});


