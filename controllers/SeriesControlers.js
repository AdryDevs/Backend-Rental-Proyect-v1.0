// Controller for the series

const SeriesModel = require("../models/series.model.js");
const { seriesFindOne } = require("../services/series.services.js");

const seriesGetAllController = async (req, res) => {
    const queryParameters = req.query || {};
    const series = await SeriesModel.find(queryParameters);
    res.json(series);
    };

const seriesGetOneController = async (req, res) => {
    const { id } = req.params;
    const seriesFound = await seriesFindOne(id)
    if (seriesFound) {
        res.json(seriesFound);
    } else {
        res.status(204).json({ message: "Series not found" });
    }
};

const seriesCreateController = async (req, res) => {
    try {
        const series = req.body;
        const seriesCreated = new SeriesModel(series);
        await seriesCreated.save();
        res.status(201).json(seriesCreated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const seriesDeleteController = async (req, res) => {
    const { id } = req.params;
    const seriesFound = await seriesFindOne(id)
    if (seriesFound) {
        await seriesFound.remove();
        res.json({ message: "Series deleted" });
    } else {
        res.status(204).json({ message: "Series not found" });
    }
};

const seriesPutController = async (req, res) => {
    const { id } = req.params;
    const series = req.body;
    const seriesFound = await seriesFindOne(id)
    if (seriesFound) {
        series.uuid = id;
        await seriesFound.replaceOne(series);
        res.json(series);
    } else {
        res.status(204).json({ message: "Series not found" });
    }
};

const seriesPatchController = async (req, res) => {
    const { id } = req.params;
    const series = req.body;
    const seriesFound = await seriesFindOne(id)
    if (seriesFound) {
        for (const key in series) {
            if (key !== "uuid") {
                seriesFound[key] = series[key];
            }
        }
        await seriesFound.save();
        res.json(seriesFound);
    } else {
        res.status(204).json({ message: "Series not found" });
    }
};

//find all series rated more than 8

const seriesRatedController = async (req, res) => {
    const series = await SeriesModel.findAll({ 
        where: {
             rating: {
                 [Op.gt]: 8 
                }
            }
        });
    res.json(series);
};

// Find series by Id

const seriesFindOneController = async (id) => {
    const id = req.params.id;
    const series = await SeriesModel.findOne({
        where: {
            id: id
        }
    });
    res.json(series);
};

// Find series by title

const seriesFindByTitleController = async (req, res) => {
    const title = req.params.title;
    const series = await SeriesModel.findAll({
        where: {
            title: title
        }
    });
    res.json(series);
};

module.exports = {
    seriesGetAllController,
    seriesGetOneController,
    seriesCreateController,
    seriesDeleteController,
    seriesPutController,
    seriesPatchController,
    seriesRatedController,
    seriesFindOneController,
    seriesFindByTitleController
};