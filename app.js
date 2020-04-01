// node core import
const path = require('path');


// 3rd parties import
const express = require('express');

// own import
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');


const app = express();

// serving static files
app.use(express.static(path.join(rootDir, 'public')));
// order matters: more specific first
// Add middleware functions - accept arrays of request handlers
// next is a function
// '/admin' filtering path
app.use('/admin', adminRoutes);

app.use(shopRoutes);

// by default '/'
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})




app.listen(3030);