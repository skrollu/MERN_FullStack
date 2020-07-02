const express = require('express');
const router = express.Router();

const moviesModel = require('../../DB/schemas.Movies');
const assert = require('assert');

router.get('/', function (req, res) {
    console.log('/api/movies...');

    moviesModel.find({}, (err, movies) => {
        assert.equal(null, err);
        //console.log("Movies: " + movies);
        res.json(movies);
    }).sort({ title: 1 });
});

router.get('/:id', function (req, res) {
    console.log('/api/movies/:id...');

    let id = req.params.id;

    moviesModel.find({ "_id": id }, (err, movie) => {
        assert.equal(null, err);
        //console.log("Movie: " + movie);
        res.json(movie);
    });
});

module.exports = router;