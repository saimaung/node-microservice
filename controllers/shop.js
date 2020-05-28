const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProductPage = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      console.log("PRODUCTS");
      console.log(products);
      res.render("shop/products-list", {
        pageTitle: "Products List",
        path: "/products",
        products: products,
      });
    })
    .catch((error) => {
      console.log("ERROR FINDING THE PRODUCT BY PK: " + error);
    });
};

exports.getIndexPage = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      console.log("PRODUCTS");
      console.log(products);
      res.render("shop/index", {
        pageTitle: "Products",
        path: "/",
        products: products,
      });
    })
    .catch((error) => {
      console.log("ERROR FINDING THE PRODUCT BY PK: " + error);
    });
};

exports.getCartPage = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      for (p of products) {
        const cartProductData = cart.products.find((cp) => cp.sku === p.sku);
        if (cartProductData) {
          cartProducts.push({
            productData: p,
            qty: cartProductData.qty,
          });
        }
      }
      res.render("shop/cart", {
        pageTitle: "Your Cart",
        path: "/cart",
        products: cartProducts,
      });
    });
  });
};

exports.postCartPage = (req, res, next) => {
  const productSku = req.body.productSku;
  Product.getSku(productSku, (product) => {
    Cart.addProduct(productSku, product.price);
  });
  res.redirect("/cart");
};

exports.postDeleteCartPage = (req, res, next) => {
  const productSku = req.body.sku;
  console.log(productSku);
  Product.getSku(productSku, (product) => {
    Cart.delete(productSku, product.price);
  });
  res.redirect("/cart");
};

exports.getOrdersPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/orders", {
      pageTitle: "Orders",
      path: "/orders",
      products: products,
    });
  });
};

exports.getCheckoutPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/checkout", {
      pageTitle: "Cart",
      path: "/checkout",
      products: products,
    });
  });
};

exports.getProductDetailsPage = (req, res, next) => {
  const productSku = req.params.productSku;
  Product.findByPk(productSku).then((product) => {
    res.render("shop/product-details", {
      product: product,
      pageTitle: product.title,
      path: "/products",
    });
  });
};
