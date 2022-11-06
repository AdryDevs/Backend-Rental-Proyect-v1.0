const Movie = require("../models/movies");

const moviesGetAllController = async (req, res) => {
  const queryParameters = req.query || {};
  const movies = await Movie.findAll(queryParameters);
  res.json(movies);
};

const moviesGetOneController = async (req, res) => {
  const { id } = req.params;
  const movieFound = await movieFindOne(id)
  if (movieFound) {
    res.json(movieFound);
  } else {
    res.status(204).json({ message: "Movie not found" });
  }
};

const moviesCreateController = async (req, res) => {
  try {
    const movie = req.body;
    const movieCreated = new Movie(movie);
    await movieCreated.save();
    res.status(201).json(movieCreated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const moviesDeleteController = async (req, res) => {
  const { id } = req.params;
  const movieFound = await movieFindOne(id)
  if (movieFound) {
    await movieFound.remove();
    res.json({ message: "Movie deleted" });
  } else {
    res.status(204).json({ message: "Movie not found" });
  }
};
const moviesPutController = async (req, res) => {
  const { id } = req.params;
  const movie = req.body;
  const movieFound = await movieFindOne(id)
  if (movieFound) {
    movie.uuid = id;
    await movieFound.replaceOne(movie);
    res.json(movie);
  } else {
    res.status(204).json({ message: "Movie not found" });
  }
};
const moviesPatchController = async (req, res) => {
  const { id } = req.params;
  const movie = req.body;
  const movieFound = await movieFindOne(id)
  if (movieFound) {
    for (const key in movie) {
      movieFound[key] = movie[key];
    }
    await movieFound.save();
    res.json(movieFound);
  } else {
    res.status(204).json({ message: "Movie not found" });
  }
};

const moviesRatedController = async (req, res) => {
    const movie = await Movies.findAll({
        limit: 3,
        order: [
            ['rating', 'DESC']
        ]
    });
    res.json(movie);
}

const moviesByIdController = async (req, res) => {
    const movie = await Movies.findAll({
        order: [
            ['rating', 'DESC']
        ]
    });
    res.json(movie);
}

const moviesByTitleController = async (req, res) => {
    const title = req.params.title;
    const movie = await Movies.findOne({
        where: {
            title: title
        }
    });
    res.json(movie);
}

//find a movie by genre

const moviesByGenreController = async (req, res) => {
    const genre = req.params.genre;
    const movie = await Movies.findAll({
        where: {
            genre: genre
        }
    });
    res.json(movie);
}

module.exports = {
    moviesGetAllController,
    moviesGetOneController,
    moviesCreateController,
    moviesDeleteController,
    moviesPutController,
    moviesPatchController,
    moviesRatedController,
    moviesByIdController,
    moviesByTitleController,
    moviesByGenreController
};


