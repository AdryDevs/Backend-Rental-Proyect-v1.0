// A router for the movie model

const express = require("express");
const moviesRoutes = express.Router();

const {
    moviesGetAllController,
    moviesGetOneController,
    moviesCreateController,
    moviesDeleteController,
    moviesPutController,
    moviesPatchController,
    moviesRatedController,
    movieByIdController,
    movieByTitleController
} = require("../controllers/MoviesControllers.js");

moviesRoutes.get("/", moviesGetAllController);
moviesRoutes.get("/:id", moviesGetOneController);
moviesRoutes.post("/", moviesCreateController);
moviesRoutes.delete("/:id", moviesDeleteController);
moviesRoutes.put("/:id", moviesPutController);
moviesRoutes.patch("/:id", moviesPatchController);
moviesRoutes.get("/rated", moviesRatedController);
moviesRoutes.get("/id/:id", movieByIdController);
moviesRoutes.get("/title/:title", movieByTitleController);


module.exports = moviesRoutes;