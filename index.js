const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8080; // Choosing a port number

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/movies', (req, res) => {
  const topMovies = [
    {
      title: 'Treasure Planet',
      director: ' John Musker, Ron Clements',
      year: 2002,
    },
    {
      title: 'Star Wars: Episode III - Revenge of the Sith',
      director: 'George Lucas',
      year: 2005,
    },
    {
      title: 'Spider-Man: No Way Home',
      director: 'Jon Watts',
      year: 2021,
    },
  ];
  res.json({ movies: topMovies });
});

app.get('/', (req, res) => {
  res.send('Welcome to my movie app!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
