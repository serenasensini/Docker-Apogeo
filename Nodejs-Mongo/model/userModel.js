// STEP 1: definire modello

/*
* Mongoose è una libreria di programmazione JavaScript orientata agli oggetti che
* crea una connessione tra MongoDB e il framework dell'applicazione web Express*/

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String

});

var User = module.exports = mongoose.model('users', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}
