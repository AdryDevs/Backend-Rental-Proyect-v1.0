const { DataTypes, Model } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');

const sequelize = require('../db/db');

class Loan extends Model {}

Loan.init({
    id_loan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
},
{
    sequelize,
    modelName: "loan",
    freezeTableName: true,
    timestamps: false
});

module.exports = Loan
