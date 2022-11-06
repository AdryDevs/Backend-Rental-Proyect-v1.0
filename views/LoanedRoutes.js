const express = require('express');
const loanedRoutes = express.Router();

const {
    loanedGetAllController,
    loanedGetOneController,
    loanedCreateController,
    loanedDeleteController,
    loanedPutController,
    loanedPatchController,
    loanedByUserIdController,
    loanedByLoanIdController,
} = require("../controllers/LoanedControllers.js");

loanedRoutes.get("/", loanedGetAllController);
loanedRoutes.get("/:id", loanedGetOneController);
loanedRoutes.post("/", loanedCreateController);
loanedRoutes.delete("/:id", loanedDeleteController);
loanedRoutes.put("/:id", loanedPutController);
loanedRoutes.patch("/:id", loanedPatchController);

module.exports = loanedRoutes;
    
