
/* const starWarsBooksModel = require('../DB/schemas.StarWarsBooks');

exports.starWarsBooks = (req, res) => {
    console.log('/api/starWarsBooks...');

    starWarsBooksModel.find({}, (err, books) => {
        assert.equal(null, err);
        console.log("Books: " + books);
        res.json(books);
    });
}

exports.starWarsBooks = (req, res) => {
    console.log('/api/starWarsBooks...');
    const swModel = new starWarsBooksModel(
        {
            title: req.body.title,
            univers: req.body.univers,
            "edition": req.body.edition,
            "author": req.body.author,
            "resume": req.body.resume,
            //"translater": req.body.translater,
            "isbn": req.body.isbn,
            "releaseDate": req.body.releaseDate,
            "year": req.body.year,
            "cover": req.body.cover,
            //"illustrater": req.body.translater,
            "barcode": req.body.barcode,
            //"volumes": req.body.volumes,
            "number": req.body.number
        }
    );

    swModel.save().then(book => {
        console.log("Saved book: " + book);
        res.json(book);
    });


    module.exports = router;
} */