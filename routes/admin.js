const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

// ADMIN related routes live in this file
const adminController = require('../controllers/admin');

// this will call next() to propagate down to all middleware
router.use(bodyParser.urlencoded({extended: false}));

router.get('/add-product', adminController.getAddProductPage);
router.get('/products', adminController.getProductPage);


// limiting the request to POST only.
router.post('/products', adminController.postAddProductPage);

module.exports = router;
