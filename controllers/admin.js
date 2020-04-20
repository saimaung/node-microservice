const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => {
    res.render('admin/add-edit-product', {
        pageTitle: 'Add a product',
        path: '/admin/add-product',
        editing: ""
    })
};

exports.postAddProductPage = (req, res, next) => {
    const title = req.body.title;
    const sku = req.body.sku;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price, sku);
    product.save();
    res.redirect('/');
};


exports.getEditProductPage = (req, res, next) => {
    const editMode = req.query.edit;
    const productSku = req.params.productSku;
    Product.getSku(productSku, product => {
        res.render('admin/add-edit-product', {
            pageTitle: 'Edit a product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        });
    });
};

exports.postEditProductPage = (req, res, next) => {
    const sku = req.body.sku;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const title = req.body.title;
    const updatedProduct = new Product(title, imageUrl, description, price, sku);
    updatedProduct.save();
    res.redirect('/admin/products');
};

exports.postDeleteProductPage = (req, res, next) => {
    const sku = req.body.sku;
    Product.delete(sku)
    res.redirect('/admin/products');
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