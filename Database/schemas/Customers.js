const db = require('../database');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customersSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
});

module.exports = db.model("Customers", customersSchema, "Customers");