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
            message: `Cannot find id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving movies with id=" + id
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
            err.message || "Some error occurred while retrieving the data."
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
                        err.message || "Some error occurred while retrieving the data."
                });
            });
    };

    //find movies by genre

    MovieController.getByGenre = (req, res) => {
        Models.movie.findAll({ where: { genre: req.params.genre } })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving the data."
                });
            });
    };


module.exports = MovieController;