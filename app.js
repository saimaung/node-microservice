// node core import
const path = require('path');


// 3rd parties import
const express = require('express');

// own import
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/error');
const rootDir = require('./util/path');


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
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.get('*', errorRoutes);

app.listen(3030);