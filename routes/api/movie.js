const express = require('express');
const router = express.Router();

const moviesModel = require('../../Database/schemas/Movies');
const assert = require('assert');

/**
 * @route /api/movie/:id
 * @access PUBLIC
 * @request GET
 */
router.get('/:id', function (req, res) {
    //console.log('/api/movies/:id...');

    let id = req.params.id;

    moviesModel.findById({ "_id": id }, (err, movie) => {
        assert.equal(null, err);
        res.json(movie);
    });
});

module.exports = router;