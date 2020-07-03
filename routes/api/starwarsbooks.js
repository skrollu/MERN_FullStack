const express = require('express');
const router = express.Router();

const starWarsBooksModel = require('../../Database/schemas/StarWarsBooks')
const assert = require('assert');

/**
 * @route /api/starWarsBooks/
 * @access PUBLIC
 * @request GET
 */
router.get('/', function (req, res) {
    console.log("/api/starWarsBooks...");

    starWarsBooksModel.find({}, function (err, books) {
        assert.equal(null, err);
        //console.log("StarWarsBooks: " + books);
        res.json(books);
    });
});

/**
 * @route /api/starWarsBooks/
 * @access PRIVATE
 * @request POST
 */
router.post('/', function (req, res) {

    const newStarWarsBook = new starWarsBooksModel(
        {
            title: req.body.title,
            univers: req.body.univers,
            edition: req.body.edition,
            author: req.body.author,
            resume: req.body.resume,
            translater: req.body.translater,
            isbn: req.body.isbn,
            releaseDate: req.body.releaseDate,
            year: req.body.year,
            cover: req.body.cover,
            illustrater: req.body.illustrater,
            barcode: req.body.barcode,
            volumes: req.body.volumes,
            number: req.body.number
        }
    );

    newStarWarsBook.save().then(book => res.json(book));
});

module.exports = router;