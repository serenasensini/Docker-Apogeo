const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fruit = new Schema ({
    name: { type: String, required: true },
    colour: { type: String, required: true },
});

module.exports = mongoose.model('Fruit', Fruit);
