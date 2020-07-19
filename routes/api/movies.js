const express = require('express');
const router = express.Router();

const moviesModel = require('../../Database/schemas/Movies');
const assert = require('assert');


/**
 * @route /api/movies
 * @access PUBLIC
 * @request GET
 */
router.get('/', function (req, res) {
    //console.log('/api/movies...');

    moviesModel.find({}, (err, movies) => {
        assert.equal(null, err);
        //console.log("Movies: " + movies);
        res.json(movies);
    }).sort({ title: 1 });
});

/**
 * @route /api/movies/:title
 * @access PUBLIC
 * @request GET
 */
router.get('/:title', function (req, res) {
    let title = req.params.title;

    if(typeof title === 'string'){
        console.log('/api/movies/:' + title);
        moviesModel.find(
            { $text: { $search: title } },
            { score: { $meta: "textScore" } })
            .sort({ score: { $meta: "textScore" } }
            )
            .exec((err, movie) => {
                assert.equal(null, err);
                res.json(movie);
            });
    } else {
        console.log("ERROR Route: /api/movies/title title is not a string");
    }
});

/**
 * @route /api/movies
 * @access PRIVATE
 * @request POST
 */
router.post('/', function (req, res) {

    const newMovie = new moviesModel({
        title: req.body.title,
        year: req.body.year,
        rated: req.body.rated,
        runtime: req.body.runtime,
        director: req.body.director,
        plot: req.body.plot,
        poster: req.body.poster,
        metacritic: req.body.metacritic,
    });

    newMovie.save().then(movie => res.json(movie));
});

module.exports = router;