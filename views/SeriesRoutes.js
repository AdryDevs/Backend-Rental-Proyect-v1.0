// A router for the series model

const express = require("express");
const seriesRouter = express.Router();

const {
    seriesGetAllController,
    seriesGetOneController,
    seriesCreateController,
    seriesDeleteController,
    seriesPutController,
    seriesPatchController,
    seriesRatedController,
    seriesFindOneController,
    seriesFindByTitleController,
    seriesFindByIdController,
    seriesReleaseIn7Controller,
    seriesReleaseInCinemasController
} = require("../controllers/Seriescontrollers.js");

seriesRouter.get("/", seriesGetAllController);
seriesRouter.get("/:id", seriesGetOneController);
seriesRouter.post("/", seriesCreateController);
seriesRouter.delete("/:id", seriesDeleteController);
seriesRouter.put("/:id", seriesPutController);
seriesRouter.patch("/:id", seriesPatchController);
seriesRouter.get("/rated", seriesRatedController);
seriesRouter.get("/id/:id", seriesFindOneController);
seriesRouter.get("/title/:title", seriesFindByTitleController);
seriesRouter.get("/id/:id", seriesFindByIdController);
seriesRouter.get("/release/7", seriesReleaseIn7Controller);
seriesRouter.get("/release/cinemas", seriesReleaseInCinemasController);

module.exports = seriesRouter;