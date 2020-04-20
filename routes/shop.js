const express = require('express');
const bodyParser = require('body-parser');

const shopController = require('../controllers/shop');

const route = express.Router();

// this will call next() to propagate down to all middleware
route.use(bodyParser.urlencoded({
    extended: false
}));
route.get('/', shopController.getIndexPage);
route.get('/products', shopController.getProductPage);
route.get('/products/:productSku', shopController.getProductDetailsPage);
route.get('/cart', shopController.getCartPage);
route.post('/cart', shopController.postCartPage);
route.post('/cart-delete-item', shopController.postDeleteCartPage);
route.get('/orders', shopController.getOrdersPage);
route.get('/checkout', shopController.getCheckoutPage);

module.exports = route;