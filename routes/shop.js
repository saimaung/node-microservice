const express = require('express');
const path = require('path');

const route = express.Router();

route.use('/', (req, res, next) => {
    console.log('In / route');
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

module.exports = route;