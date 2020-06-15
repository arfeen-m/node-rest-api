const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./dbconnection');

const con = new database({

    host: "localhost",
    user: "root",
    password: "testtest",
    database: "driverdb",
    multipleStatements: true
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const shipmentRoutes = require('./api/routes/shipments');

app.use('/products', productRoutes); 
app.use('/orders', orderRoutes); 
app.use('/shipments', shipmentRoutes);

app.use((req,res,next) =>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;