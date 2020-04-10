const Product = require('../models/product');

exports.getProductPage = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/products-list', {
            pageTitle: 'Products List',
            path: '/products',
            products: products
        });
    });
};

exports.getIndexPage = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            pageTitle: 'Products',
            path: '/',
            products: products
        });
    });
};

exports.getCartPage = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/cart', {
            pageTitle: 'Cart',
            path: '/cart',
            products: products
        });
    });
};

exports.getCheckoutPage = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/checkout', {
            pageTitle: 'Cart',
            path: '/checkout',
            products: products
        });
    });
};