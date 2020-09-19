const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const cors = require('cors');
var con = mysql.createConnection({
    host: "database",
    user: "root",
    port: '3306',
    password: "password",
    database: "mean",
    charset  : 'utf8'
});
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

con.connect(function(err) {
    if(err) console.log(err);
});

router.get('/books', cors(corsOptions), (req, res) => {
    con.query("SELECT * FROM books", function (err, result, fields) {
        if (err) res.send(err);
        res.send(result);
        console.log(result);
    });
});

module.exports = router;