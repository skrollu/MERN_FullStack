const db = require('../database');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now
    } 
});

module.exports = db.model("Users", usersSchema, "Users");