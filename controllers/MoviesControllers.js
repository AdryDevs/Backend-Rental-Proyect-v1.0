// Controller for the movies

const MovieModel = require("../models/movies.js");
// const { movieFindOne } = require("../services/movies.services.js") TODO

const moviesGetAllController = async (req, res) => {
  const queryParameters = req.query || {};
  const movies = await MovieModel.findAll(queryParameters);
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
    const movieCreated = new MovieModel(movie);
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

//find all movies rated more than 8

const moviesRatedController = async (req, res) => {
    const movies = await Movies.findAll({
        where: {
            rating: {
                [Op.gt]: 8
            }
        }
    });
    res.json(movies);
}

//find a movie by id

const moviesByIdController = async (req, res) => {
    const id = req.params.id;
    const movie = await Movies.findOne({
        where: {
            id: id
        }
    });
    res.json(movie);
}

//find a movie by title

const moviesByTitleController = async (req, res) => {
    const title = req.params.title;
    const movie = await Movies.findOne({
        where: {
            title: title
        }
    });
    res.json(movie);
}

//TODO find a movie by genre

module.exports = {
    moviesGetAllController,
    moviesGetOneController,
    moviesCreateController,
    moviesDeleteController,
    moviesPutController,
    moviesPatchController,
    moviesRatedController,
    moviesByIdController,
    moviesByTitleController
};


