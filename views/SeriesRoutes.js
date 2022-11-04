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
    seriesFindByTitleController
} = require("../controllers/series.controllers.js");

seriesRouter.get("/", seriesGetAllController);
seriesRouter.get("/:id", seriesGetOneController);
seriesRouter.post("/", seriesCreateController);
seriesRouter.delete("/:id", seriesDeleteController);
seriesRouter.put("/:id", seriesPutController);
seriesRouter.patch("/:id", seriesPatchController);
seriesRouter.get("/rated", seriesRatedController);
seriesRouter.get("/id/:id", seriesFindOneController);
seriesRouter.get("/title/:title", seriesFindByTitleController);

module.exports = seriesRouter;