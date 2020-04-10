const express = require('express');
const path = require('path');

const shopController = require('../controllers/shop');

const route = express.Router();

route.get('/', shopController.getIndexPage);
route.get('/products', shopController.getProductPage);
route.get('/cart', shopController.getCartPage);
route.get('/checkout', shopController.getCheckoutPage);

module.exports = route;