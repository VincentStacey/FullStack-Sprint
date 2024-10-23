const express = require('express');
const path = require('path');
const { getTopRatedMovies, getMoviesByGenre, getRandomUpcomingMovies,getRandomMovies} = require('./utils/movieUtils');
const { Movies, Genres } = require('./utils/data');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/movie/:id', (request, response) => {
    //For use with links like: /movie/1
    const movieId = request.params.id;
});

app.get('/', (req, res) => {
  try {
    const randomMovies = getRandomMovies(); 
    res.render('index', { randomMovies }); 
  } catch (err) {
    console.error('Error fetching random movies:', err);
    res.status(500).send('Error fetching random movies');
  }
});

app.get('/movies', (req, res) => {
    const genre = req.query.genre || Genres.SCI_FI; 
    const count = parseInt(req.query.count) || 5;

    try {
        const movies = getMoviesByGenre(genre, count);
        res.render('movies', { genre, movies, Genres });  
    } catch (error) {
        res.status(400).send(error.message);  
    }
});

app.get('/topRatedMovies', (req, res) => {
    const topRatedMovies = getTopRatedMovies(15);
    res.render('topRatedMovies', { movies: topRatedMovies });
});

  app.get('/upcoming-movies', (req, res) => {
    const randomUpcomingMovies = getRandomUpcomingMovies();
    res.render('upcoming-movies', { movies: randomUpcomingMovies });
});

//Add remaining routes here

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
