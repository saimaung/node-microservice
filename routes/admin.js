const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const router = express.Router();

// ADMIN related routes live in this file

// this will call next() to propagate down to all middleware
router.use(bodyParser.urlencoded({extended: false}));

router.get('/add-products', (req, res, next) => {
    console.log('In /add-products route');
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

// limiting the request to POST only. 
router.post('/products', (req, res, next) => {
    console.log('In /products route');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;