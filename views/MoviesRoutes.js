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
    moviesByIdController,
    moviesByTitleController,
    moviesReleaseIn7Controller,
    moviesReleaseInCinemasController,
    moviesByGenreController
} = require("../controllers/MoviesControllers.js");

moviesRoutes.get("/", moviesGetAllController);
moviesRoutes.get("/:id", moviesGetOneController);
moviesRoutes.post("/", moviesCreateController);
moviesRoutes.delete("/:id", moviesDeleteController);
moviesRoutes.put("/:id", moviesPutController);
moviesRoutes.patch("/:id", moviesPatchController);
moviesRoutes.get("/rated", moviesRatedController);
moviesRoutes.get("/id/:id", moviesByIdController);
moviesRoutes.get("/title/:title", moviesByTitleController);
moviesRoutes.get("/release/7", moviesReleaseIn7Controller);
moviesRoutes.get("/release/cinemas", moviesReleaseInCinemasController);
moviesRoutes.get("/genre/:genre", moviesByGenreController);

module.exports = moviesRoutes;