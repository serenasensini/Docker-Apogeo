let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'Users API is working',
        message: 'Welcome to webapp crafted with love!',
    });
});

// STEP 3: definire route

var userController = require('../controllers/usersController');
router.route('/users')
    .get(userController.index)
    .post(userController.new);

router.route('/users/:user_id')
    .get(userController.view)
    .put(userController.update)
    .delete(userController.delete);


module.exports = router;
