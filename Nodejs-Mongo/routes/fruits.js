const express = require('express');
const router = express.Router();
const fruit = require('../controllers/fruits');

router.get('/', function(req, res){
    fruit.index(req,res);
});

router.post('/addfruit', function(req, res) {
    fruit.create(req,res);
});

router.get('/getfruit', function(req, res) {
    fruit.list(req,res);
});

module.exports = router;
