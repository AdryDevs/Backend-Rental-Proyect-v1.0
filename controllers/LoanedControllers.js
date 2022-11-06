const Loaned = require('../models/loaned');

const loanedGetAllController = async (req, res) => {
    const queryParameters = req.query || {};
    const loaned = await Loaned.findAll(queryParameters);
    res.json(loaned);
};

const loanedGetOneController = async (req, res) => {
    const { id } = req.params;
    const loanedFound = await loanedFindOne(id)
    if (loanedFound) {
        res.json(loanedFound);
    } else {
        res.status(204).json({ message: "Loaned not found" });
    }
}

const loanedCreateController = async (req, res) => {
    try {
        const loaned = req.body;
        const loanedCreated = new Loaned(loaned);
        await loanedCreated.save();
        res.status(201).json(loanedCreated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const loanedDeleteController = async (req, res) => {
    const { id } = req.params;
    const loanedFound = await loanedFindOne(id)
    if (loanedFound) {
        await loanedFound.remove();
        res.json({ message: "Loaned deleted" });
    } else {
        res.status(204).json({ message: "Loaned not found" });
    }
};

const loanedPutController = async (req, res) => {
    const { id } = req.params;
    const loaned = req.body;
    const loanedFound = await loanedFindOne(id)
    if (loanedFound) {
        loaned.uuid = id;
        await loanedFound.replaceOne(loaned);
        res.json(loaned);
    } else {
        res.status(204).json({ message: "Loaned not found" });
    }
};

const loanedPatchController = async (req, res) => {
    const { id } = req.params;
    const loaned = req.body;
    const loanedFound = await loanedFindOne(id)
    if (loanedFound) {
        for (const key in loaned) {
            if (key !== "uuid") {
                loanedFound[key] = loaned[key];
            }
        }
        await loanedFound.save();
        res.json(loanedFound);
    } else {
        res.status(204).json({ message: "Loaned not found" });
    }
};

module.exports = {
    loanedGetAllController,
    loanedGetOneController,
    loanedCreateController,
    loanedDeleteController,
    loanedPutController,
    loanedPatchController
};