const db = require('./database');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: String,
    email: String,
    password: String,
    date: Date
});

module.exports = db.model("Users", usersSchema);