const path = require('path');
const fs = require('fs');

const rootDir = require('../util/path');

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
            products.push(this);
            fs.writeFile(productsPath, JSON.stringify(products), (err) => {
                console.log(err);
            })
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