const db = require('./database');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const starWarsBooksSchema = new Schema({
    title: String,
    univers: String,
    edition: String,
    author: String,
    resume: String,
    /* translater: {
        francais: [String]
    }, */
    isbn: String,
    releaseDate: Number,
    year: Number,
    cover: String,
    //illustrater: [String],
    barcode: Number,
    //volumes: [String],
    number: Number
});

module.exports = db.model("StarWarsBooks", starWarsBooksSchema);