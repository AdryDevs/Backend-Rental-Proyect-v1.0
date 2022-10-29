const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Article extends Model {}

Article.init({
    id_article: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    date: DataTypes.DATE,
    type: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: 'article',
    freezeTableName: true,
    timestamps: false
})

module.exports = Article