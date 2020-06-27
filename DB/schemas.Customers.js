const db = require('./database');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customersSchema = new Schema({
    firstName: String,
    lastName: String,
});

module.exports = db.model("Person", customersSchema);