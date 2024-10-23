const { Movies, Genres } = require("./data");

/**
 * Get `x` movies by genre
 * @param {Genres} genre - The genre of the movies
 * @param {number} x - The number of movies to retrieve
 * @returns {Array.<Movies>} - An array of movies matching the genre
 */
function getMoviesByGenre(genre, x) {
    if (!Object.values(Genres).includes(genre)) {
        throw new Error("Invalid genre provided.");
    }
    const filteredMovies = Movies.filter(movie => movie.genre === genre);
    return filteredMovies.slice(0, x);
}

/**
 * Get the `x` top rated movies, ordered by rating
 * @param {number} x - The number of top-rated movies to retrieve
 * @returns {Array.<Movies>} - An array of top-rated movies
 */
function getTopRatedMovies(x) {
    return Movies
        .sort((a, b) => b.rating - a.rating)  
        .slice(0, x);           
}         

/**
 * Get the details of a movie by its ID
 * @param {number} id - The ID of the movie
 * @returns {Movies} - The movie object
 */
function getMovieDetailsById(id) {
    // Implementation here
}

/**
 * Select a random movie ID
 * @returns {number} - A random movie ID
 */
function selectRandomMovieId() {
    const upcomingMovies = Movies.filter(movie => movie.rating === null);
    const randomIndex = Math.floor(Math.random() * upcomingMovies.length);
    return upcomingMovies[randomIndex].id;  
}

/**
 * @returns {Array.<Movies>} - An array of 5 unique random upcoming movies
 */
function getRandomUpcomingMovies() {
    const selectedMovieIds = new Set();
    while (selectedMovieIds.size < 5) {
        const randomId = selectRandomMovieId();
        selectedMovieIds.add(randomId); 
    }

    return Movies.filter(movie => selectedMovieIds.has(movie.id));
}


// Export the functions to be used in other modules
module.exports = {
    getMoviesByGenre,
    getTopRatedMovies,
    getMovieDetailsById,
    selectRandomMovieId,
    getRandomUpcomingMovies,
};
