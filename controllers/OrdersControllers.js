const db = require("../models");
const orders = db.order;
const Op = db.Sequelize.Op;

const OrderController = {};

//CRUD

    //Order a movie or a tv show

    OrderController.order = (req, res) => { 
        if (!req.body.articleId) {
        res.status(400).send({
            message: "Content is empty"
        });
        return;
        }
        
        const order = {
        articleId: req.body.articleId,
        id_user: req.body.id_user,

        };
        
        orders.create(order)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "An error occurred while creating the order."
            });
        });
    };

    //Update order

        OrderController.update = (req, res) => {
            const id = req.params.id;
            
            orders.update(req.body, {
                where: { id: id }
            })
                .then(num => {
                if (num == 1) {
                    res.send({
                    message: "Order was updated successfully."
                    });
                } else {
                    res.send({
                    message: `Cannot update order with id=${id}. Maybe order was not found or req.body is empty!`
                    });
                }
                })
                .catch(err => {
                res.status(500).send({
                    message: "Error updating order with id=" + id
                });
                });
            };

    //Get all orders from user 

    OrderController.findAll = (req, res) => {
        orders.findAll({ where: { userId: req.userId } })
            .then(data => {
            res.send(data);
            })
            .catch(err => {
            res.status(500).send({
                message:
                err.message || "An error occurred while retrieving orders."
            });
            });
        };

        //Get all orders 

        OrderController.findAllAdminOnly = (req, res) => {
            orders.findAll()
                .then(data => {
                res.send(data);
                })
                .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "An error occurred while retrieving orders."
                });
                });
            };

module.exports = OrderController;
