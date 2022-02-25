const mongoose = require('mongoose');

const MONGO_USERNAME = 'myuser';
const MONGO_PASSWORD = 'password';
const MONGO_HOSTNAME = 'db';
const MONGO_PORT = '27017';
const MONGO_DB = 'fruits';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

console.log("#####################");
console.log(url);
console.log("#####################");
mongoose.connect(url, {useNewUrlParser: true});
