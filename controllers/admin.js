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
    req
        .user
        .createProduct({
            title: title,
            imageUrl: imageUrl,
            price: price,
            description: description,
            sku: sku
        })
        .then(result => {
            console.log(result);
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        });
    res.redirect('/');
};


exports.getEditProductPage = (req, res, next) => {
    const editMode = req.query.edit;
    const productSku = req.params.productSku;
    Product
        .findByPk(productSku)
        .then(product => {
            res.render('admin/add-edit-product', {
                pageTitle: 'Edit a product',
                path: '/admin/edit-product',
                editing: editMode,
                product: product
            });
        })
        .catch(error => {
            console.log(error);
        });
};

exports.postEditProductPage = (req, res, next) => {
    const sku = req.body.sku;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const title = req.body.title;
    Product
        .findByPk(sku)
        .then(product => {
            product.sku = sku;
            product.price = price;
            product.imageUrl = imageUrl;
            product.description = description;
            product.title = title;
            return product.save();
        })
        .then(result => {
            console.log('product updated successfully');
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postDeleteProductPage = (req, res, next) => {
    const sku = req.body.sku;
    Product
        .destroy({
            where: {
                sku: sku
            }
        })
        .then(result => {
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        });
};


exports.getProductPage = (req, res, next) => {
    Product
        .findAll()
        .then((products) => {
            res.render('admin/products', {
                pageTitle: 'Admin Products',
                path: '/admin/products',
                products: products
            });
        })
        .catch(error => {
            console.log(error);
        });
};