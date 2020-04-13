const Product = require('../models/product');
const Cart = require('../models/cart');

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

exports.postCartPage = (req, res, next) => {
    const productSku = req.body.productSku;
    Product.getSku(productSku, product => {
        Cart.addProduct(productSku, product.price);
    });
    res.redirect('/cart');
};

exports.getOrdersPage = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/orders', {
            pageTitle: 'Orders',
            path: '/orders',
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

exports.getProductDetailsPage = (req, res, next) => {
    const productSku = req.params.productSku;
    Product.getSku(productSku, prod => {
        res.render('shop/product-details', {
            product: prod,
            pageTitle: prod.title,
            path: '/products'
        });
    });
};