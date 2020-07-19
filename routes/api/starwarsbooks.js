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
    //console.log("/api/starWarsBooks...");

    starWarsBooksModel.find({}, function (err, books) {
        assert.equal(null, err);
        //console.log("StarWarsBooks: " + books);
        res.json(books)
    }).sort({ title: -1 });;
});

/**
 * @route /api/starWarsBooks/:titleORplot
 * @access PUBLIC
 * @request GET
 */
router.get('/:titleORplot', function (req, res) {
    let titleORplot = req.params.titleORplot;

    if (typeof titleORplot === 'string') {
        console.log('/api/starWarsBooks/:' + titleORplot);
        starWarsBooksModel.find(
            { $text: { $search: titleORplot } },
            { score: { $meta: "textScore" } })
            .sort({ score: { $meta: "textScore" } }
            )
            .exec((err, books) => {
                assert.equal(null, err);
                res.json(books);
            });
    } else {
        console.log("ERROR Route: /api/starWarsBooks/titleORplot titleORplot is not a string");
    }
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