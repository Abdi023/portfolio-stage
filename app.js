const path = require('path')
const express = require('express');
const morgan = require('morgan');
const viewsRoutes = require('./Routes/viewsRoutes'); 

const app = express();

app.use(express.urlencoded({ extended: true }));

// Development logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewsRoutes);
app.use('/about', viewsRoutes);
app.use('/portfolio', viewsRoutes);
app.use('/contact', viewsRoutes);



module.exports = app;