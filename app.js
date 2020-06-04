// node core import
const path = require('path');


// 3rd parties import
const express = require('express');

// own import
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/error');
const rootDir = require('./util/path');
const sequelize = require('./util/db');
const Product = require('./models/product');
const User = require('./models/user');


const app = express();

// ejs templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// serving static files
app.use(express.static(path.join(rootDir, 'public')));
// order matters: more specific first
// Add middleware functions - accept arrays of request handlers
// next is a function
// '/admin' filtering path
app.use((req, res, next) => {
    User
        .findByPk(1)
        .then(user => {
            req.user = user; // storing Sequelize object
            next();
        })
        .catch(err => {
            console.log(err);
        })
});
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.get('*', errorRoutes);

Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
});

User.hasMany(Product);

sequelize
    .sync({
        force: true
    })
    .then(result => {
        return User.findByPk(1);
    })
    .then(user => {
        if (!user) {
            return User.create({
                name: 'Sai',
                email_address: 'saiwaimaung@gmail.com'
            });
        }
        return Promise.resolve(user);
    })
    .then(user => {
        app.listen(3030);
    })
    .catch(err => {
        console.log(err);
    });