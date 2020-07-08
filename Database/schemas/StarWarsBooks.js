const db = require('../database');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const starWarsBooksSchema = new Schema({
    title: { type: String },
    univers: { type: String },
    edition: { type: String },
    author: { type: String },
    resume: { type: String },
    translater: {
        francais: [String]
    },
    isbn: { type: String },
    releaseDate: { type: Number },
    year: { type: Number },
    cover: { type: String },
    illustrater: [String],
    barcode: { type: Number },
    volumes: [String],
    number: { type: Number }
});

module.exports = db.model("StarWarsBooks", starWarsBooksSchema, "StarWarsBooks");