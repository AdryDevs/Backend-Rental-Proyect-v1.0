const Models = require('../models');
const { Op, Model } = require('sequelize');

const UserController = {};

//CRUD

//create new user
UserController.create = (req, res) => {
    // Validate request
    if (!req.body.username || !req.body.password) {
        res.status(400).send({
        message: 'Content can not be empty!',
        });
        return;
    };
    
    const user = {
        username: req.body.username,
        password: req.body.password,
    };
    
    Models.user
        .create(user)
        .then((data) => {
        res.send(data);
        })
        .catch((err) => {
        res.status(500).send({
            message:
            err.message || 'Some error occurred while creating the User.',
        });
        });
    };

    //get user's info
    UserController.getUser = (req, res) => {
        const id = req.params.id;
        Models.user.findByPk(id)
        .then(data => {
            if (data) {
            res.send(data);
            } else {
            res.status(404).send({
                message: `Cannot find user id=${id}.`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error retrieving user's info with id=" + id
            });
        });
    };

    // update user's info
    UserController.updateUser = (req, res) => {
        const id = req.params.id;
        Models.user.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "User's info was updated successfully."
            });
            } else {
            res.send({
                message: `Cannot update user's info with id=${id}. User not found or body is empty!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating user with id=" + id
            });
        });
    };

    // delete user, only admin can do this (to do: add admin role)
    UserController.deleteUser = (req, res) => {
        const id = req.params.id;
        Models.user.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "User was deleted successfully!"
            });
            } else {
            res.send({
                message: `Cannot delete user with id=${id}. User not found!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete user with id=" + id
            });
        });
    }

module.exports = UserController;