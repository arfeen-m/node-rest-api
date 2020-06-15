// mysql db test connection

const express = require('express');
const router = express.Router();
//const mysqlConnection = require("/Projects/-rest-driveme/dbconnection");
const mysqlConnection = require("../../dbconnection");

router.get('/', (req,res) => {
    // mysqlConnection.query('SELECT * FROM shipments',(err, rows, fields)=>{
    //     if(!err){
    //         res.send(rows);
    //     } else {
    //         console.log(err);
    //     }
    // });
    res.status(200).json({
        message: 'shipments were fetched'
    }); 
});

module.exports = router;