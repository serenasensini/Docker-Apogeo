// STEP 2: definire controller
User = require('../model/userModel');

// definisco una serie di moduli che posso esportare e utilizzare nel router successivamente per compiere diverse operazioni, come
// recuperare degli utenti, ecc.

// per ognuno di essi, uso una funzione apposita che prende in ingresso la request, predispone la response e attraverso
// il model definito preced, vado a utilizzare le funzioni messe a disposizione da Mongoose
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "KO",
                message: err,
            });
        }
        res.json({
            status: "OK",
            message: "Users retrieved successfully",
            data: users
        });
    });
};

exports.new = async function (req, res) {
    var request = new User();
    request.name = req.body.name ? req.body.name : request.name;
    request.description = req.body.description;
    request.save(function (err) {
        if (err)
            res.json({
                status: "KO",
                message: err,
            });
        else
            res.json({
                status: "OK",
                message: 'New user created!',
                data: request
            });
    });

};

exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, contact) {
        if (err)
            res.json({
                status: "KO",
                message: err,
            });
        res.json({
            status: "OK",
            message: 'User details loading..',
            data: contact
        });
    });
};

exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, request) {
        if (err)
            res.send(err);
        request.name = req.body.name ? req.body.name : request.name;
        request.description = req.body.description ? req.body.description : request.description;
        request.save(function (err) {
            if (err)
                res.json({
                    status: "KO",
                    message: err,
                });
            res.json({
                status: "OK",
                message: 'User Info updated',
                data: request
            });
        });
    });
};

exports.delete = function (req, res) {
    console.log(req.params.user_id);
    User.remove({
        _id: req.params.user_id
    }, function (err) {
        if (err)
            res.json({
                status: "KO",
                message: err,
            });
        res.json({
            status: "OK",
            message: 'User deleted'
        });
    });
};
