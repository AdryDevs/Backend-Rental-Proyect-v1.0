const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class User extends Model {}

User.init({
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            isEmail: true,
            len: [1, 100]
        }
    },
    picture: DataTypes.STRING,
    gender: DataTypes.ENUM('Male', 'Female'),
    age: DataTypes.DATEONLY,
    telephone: {
        type: DataTypes.STRING,
        validate: {
            len: [9, 9]
        }
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            len: [1,45]
        }
    }
},
{
    sequelize,
    modelName: "user",
    freezeTableName: true,
    timestamps: false
})

module.exports = User