var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

/*
* AUTENTICAZIONE E GESTIONE UTENZA
* */

// LOGIN

exports.index = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let response = {};

    //FIXME: just for demo purposes

    if(username === 'admin' && password === '4teamea'){

        let token = jwt.sign({userID: username, role: 'administrator'}, 'ea-sizing-secret', {expiresIn: '2h'});
        response['token'] = token;
        response['role'] = 'administrator';
        response['status'] = 200;
        response['message'] = 'OK';
    } else {
        response['status'] = 400;
        response['message'] = 'KO';
        response['data'] = 'User and/or password are wrong. Retry!';
    }

    res.statusCode = 200;
    res.json(response);
};
