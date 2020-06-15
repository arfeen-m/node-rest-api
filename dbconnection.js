const mysql = require("mysql");

// var mySqlConnection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "testtest",
//     database: "driverdb",
//     multipleStatements: true
// });

// mySqlConnection.connect((err) => {
//     if(!err){
//         console.log("Connected");
//     } else {
//         console.log("Connection failed" + err.message);
//     }
// });

// module.export = mySqlConnection;

class Database {
    
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }

    query(sql, args){
        return new Promise((resolve,reject) => {
            this.connection.query(sql,args, (err, rows) => {
                if(err){
                    return reject(err);
                }

                return resolve(rows);
            });
        });
    }

    closed() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if(err){
                    return reject(err);
                }
            
            return resolve(rows);
            });
        });
    }
}

module.exports = Database;