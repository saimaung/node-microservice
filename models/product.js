const path = require('path');
const fs = require('fs');

const rootDir = require('../util/path');
const cart = require('../models/cart');

const productsPath = path.join(rootDir, 'data', 'products.json');

const readProductsFromFile = cb => {
    fs.readFile(productsPath, (err, fileContent) => {
        if (err) {
            return cb([])
        };
        cb(JSON.parse(fileContent));
    })
}

module.exports = class Product {
    constructor(title, imageUrl, description, price, sku) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.sku = sku;
    }

    save() {
        readProductsFromFile(products => {
            const existingProductIndex = products.findIndex(p => p.sku === this.sku);
            const updatedProducts = [...products];
            if (existingProductIndex != -1) {
                updatedProducts[existingProductIndex] = this;
            } else {
                updatedProducts.push(this);
            }
            fs.writeFile(productsPath, JSON.stringify(updatedProducts), (err) => {
                console.log(err);
            })
        });
    }

    static delete(sku) {
        readProductsFromFile(products => {
            const deleteProduct = products.find(p => p.sku === sku);

            const updatedProducts = products.filter(p => {
                p.sku !== sku;
            });
            fs.writeFile(productsPath, JSON.stringify(updatedProducts), (err) => {
                if (!err) {
                    cart.delete(sku, deleteProduct.price);
                } else {
                    console.log('ERROR IN DELETING SKU: ' + sku);
                    console.log(err);
                }
            });
        });
    }

    static fetchAll(cb) {
        readProductsFromFile(cb);
    }

    static getSku(sku, cb) {
        readProductsFromFile(products => {
            const product = products.find(p => {
                if (p.sku === sku)
                    return p
            });
            cb(product);
        });
    }
};