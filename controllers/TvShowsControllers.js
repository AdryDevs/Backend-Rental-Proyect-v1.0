const Models = require("../models/index");
const {Op, Model} = require("sequelize");

const TvShowsController = {};

//CRUD

    //get all tv shows from database
TvShowsController.getAll = (req, res) => {
    Models.tvshow.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tv shows."
        });
      });
    };


    //get tv shows by Id
TvShowsController.getById = (req, res) => {
    const id = req.params.id;
    Models.tvshow.findByPk(id)
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
          message: "Error retrieving tv shows with id=" + id
        });
      });
  };

    //get tv shows by Title
    TvShowsController.getByTitle = (req, res) => {
    tvshows.findAll({ where: { title: req.params.title } })
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

    //find top rated tv shows
    TvShowsController.getTopRated = (req, res) => {
    tvshows.findAll({ where: { rating: { [Op.gt]: 5 } } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the data."
        });
      });
    }

    //find tv shows that will go air within the next 7 days
    TvShowsController.getNext7Days = (req, res) => {
    tvshows.findAll({ where: { release_date: { [Op.gt]: new Date(), [Op.lt]: new Date().setDate(new Date().getDate() + 7) } } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the data."
        });
      });
    }

    module.exports = TvShowsController;


