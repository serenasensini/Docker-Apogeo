let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to webapp crafted with love!',
    });
});

var requestController = require('../controllers/requestController');
router.route('/requests')
    .get(requestController.index)
    .post(requestController.new);

router.route('/requests/:request_id')
    .get(requestController.view)
    .put(requestController.update)
    .delete(requestController.delete);


module.exports = router;
