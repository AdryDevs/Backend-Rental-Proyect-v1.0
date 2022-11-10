const Models = require("../models/index");
const {Op, Model} = require("sequelize");

const MovieController = {};

//CRUD

    //get all movies from database
MovieController.getAll = (req, res) => {
    Models.movie.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving movies."
        });
      });
    };



    //get movies by Id
MovieController.getById = (req, res) => {
    const id = req.params.id;

    Models.movie.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving movies with id=" + id
        });
      });
  };




    //create a new movie in database
MovieController.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Movie
    const newMovie = {
      title: req.body.title,
      categoryId: req.body.categoryId
    };
  
    // Save Movies in the database
    movies.create(newMovie)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movie."
        });
      });
  };



    //update a movie from database
MovieController.update = (req, res) => {
    const id = req.params.id;
  
    movies.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Movie with id=" + id
        });
      });
  };



    //get movie by Title
        
  MovieController.getByTitle = (req, res) => {
    movies.findAll({ where: { title: req.params.title } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

    //find top rated movies

    MovieController.getTopRated = (req, res) => {
        Models.movie.findAll({ where: { rating: { [Op.gt]: 4 } } })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving tutorials."
                });
            });
    };


module.exports = MovieController;