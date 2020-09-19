const path = require('path');
const Fruit = require('../models/fruit');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/fruits.html'));
};

exports.create = function (req, res) {
    var newFruit = new Fruit(req.body);
    newFruit.save(function (err) {
        if(err) {
            res.status(400).send('Errore durante il salvataggio');
        } else {
            res.redirect('/fruits/getfruit');
        }
    });
};

exports.list = function (req, res) {
    Fruit.find({}).exec(function (err, fruits) {
        if (err) {
            return res.send(500, err);
        }
        res.render('getfruit', {
            fruits: fruits
        });
    });
};
