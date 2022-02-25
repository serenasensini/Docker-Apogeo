Request = require('../model/requestModel');

exports.index = function (req, res) {
    Request.get(function (err, requests) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Requests retrieved successfully",
            data: requests
        });
    });
};

exports.new = function (req, res) {
    var request = new Request();
    request.name = req.body.name ? req.body.name : request.name;
    request.description = req.body.description;
    request.date = new Date(Date.now());

    request.save(function (err) {
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New request created!',
                data: request
            });
    });
};

exports.view = function (req, res) {
    Request.findById(req.params.request_id, function (err, request) {
        if (err)
            res.send(err);
        res.json({
            message: 'Request details loading..',
            data: request
        });
    });
};

exports.update = function (req, res) {
    Request.findById(req.params.request_id, function (err, request) {
        if (err)
            res.send(err);
        request.name = req.body.name ? req.body.name : request.name;
        request.description = req.body.description;
        request.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Request Info updated',
                data: request
            });
        });
    });
};

exports.delete = function (req, res) {
    Request.remove({
        _id: req.params.request_id
    }, function (err) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Request deleted'
        });
    });
};
