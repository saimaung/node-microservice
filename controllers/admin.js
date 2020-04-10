const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add a product',
        path: '/admin/add-product'
    })
};

exports.postAddProductPage = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

exports.getProductPage = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            pageTitle: 'Admin Products',
            path: '/admin/products',
            products: products
        });
    });
};