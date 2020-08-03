const db = require('../database');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rated: {
        type: String,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        default:"https://i0.wp.com/www.youstudio.fr/wp-content/uploads/2012/12/Point-dinterrogation.png?ssl=1"
    },
    metacritic: {
        type: String,
    },
    youtubeEmbedUrl: {
        type: String,
        default: "https://www.youtube.com/embed/cgt8351V7D0"
    },
    actors: {
        type: Array,
        required: false
    }
});

module.exports = db.model("Movies", moviesSchema, "Movies");