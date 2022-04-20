var mysql = require('mysql');
const fs = require('fs');

var con = mysql.createConnection({
    host: "localhost",
    user: "outmane",
    password: "paso",
    database: "db_example"
});

con.connect(function (err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM quotes LIMIT 6", function (err, result, fields) {
        if (err) throw err;
        //console.log(result);
        const data = JSON.stringify(result);

        fs.writeFile('../../data/quotes.js', "var quotes="+data+";", (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        });
    });
});