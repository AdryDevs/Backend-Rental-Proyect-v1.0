const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/OrdersControllers');
const auth  = require('../middlewares/auth');



router.post('/order', auth, OrderController.order);
router.put('/update/:id', auth, OrderController.update);
router.get('/', auth, OrderController.findAllAdminOnly);
router.get('/user', auth, OrderController.findAll);

module.exports = router;


