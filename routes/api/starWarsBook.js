const express = require('express');
const router = express.Router();

const starWarsBooksModel = require('../../Database/schemas/StarWarsBooks')
const assert = require('assert');


/**
 * @route /api/starWarsBook/:id
 * @access PUBLIC
 * @request GET
 */
router.get('/:id', function (req, res) {
    //console.log('/api/movies/:id...');

    let id = req.params.id;

    starWarsBooksModel.findById({ "_id": id }, (err, book) => {
        assert.equal(null, err);
        res.json(book);
    });
});

module.exports = router;