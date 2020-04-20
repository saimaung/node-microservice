const fs = require("fs");
const path = require("path");

const cartDataPath = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "cart.json"
);

module.exports = class Cart {
    static addProduct(sku, price) {
        // read cart table if exists
        fs.readFile(cartDataPath, (err, fileContent) => {
            let cart = {
                products: [],
                totalPrice: 0,
            };

            if (!err) {
                cart = JSON.parse(fileContent);
            }

            const existingProductIndex = cart.products.findIndex(
                (p) => p.sku === sku
            );
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = {
                    ...existingProduct,
                };
                updatedProduct.qty += 1;
                console.log("updated product qty: " + updatedProduct.qty);
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {
                    sku: sku,
                    qty: 1,
                };
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice += +price;
            fs.writeFile(cartDataPath, JSON.stringify(cart), (err) => {
                if (err) {
                    console.log("ERROR WRITING CART MODEL DATA: " + err);
                }
            });
        });
    }

    static delete(sku, price) {
        fs.readFile(cartDataPath, (err, fileContent) => {
            if (err) {
                return;
            }
            const cart = JSON.parse(fileContent);
            // get qty
            const product = cart.products.find((p) => p.sku === sku);
            if (!product) {
                return;
            }
            const qty = product.qty;
            const updatedCart = cart.products.filter((p) => p.sku !== sku);
            updatedCart.totalPrice = updatedCart.totalPrice - price * qty;
            fs.writeFile(cartDataPath, JSON.stringify(updatedCart), (err) => {
                if (err) {
                    console.log("ERROR DELETING AND UPDATING CART MODEL DATA: " + err);
                }
            });
        });
    }

    static getCart(cb) {
        fs.readFile(cartDataPath, (err, fileContent) => {
            if (err) {
                return cb(null);
            } else {
                return cb(JSON.parse(fileContent));
            }
        });
    }
};