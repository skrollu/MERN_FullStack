const db = require('./database');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: String,
    year: Number,
    rated:String,
    runtime:Number,
    director: String,
    plot: String,
    poster: String, 
    metacritic: Number,
});

module.exports = db.model("Movies", moviesSchema);