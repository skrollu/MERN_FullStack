const assert = require('assert');

const customersModel = require('../DB/schemas.Customers')

exports.customers = function(req, res){
    console.log("/api/customers...");

    customersModel.find({}, function (err, customers) {
        assert.equal(null, err);
        //console.log("Customers: " + customers);
        res.json(customers);
    });
}

const usersModel = require('../DB/schemas.Users')

exports.users = function (req, res) {
    console.log("/api/users...");

    usersModel.find({}, function (err, users) {
        assert.equal(null, err);
        //console.log("Users: " + users);
        res.json(users);
    });
}

const moviesModel = require('../DB/schemas.Movies');

exports.movies = (req, res) => {
    console.log('/api/movies...');

    moviesModel.find({}, (err, movies) => {
        assert.equal(null, err);
        //console.log("Movies: " + movies);
        res.json(movies);
    }).sort({ title: 1 });
}

exports.movieId = (req, res) => {
    console.log('/api/moviesId...');

    let id = req.params.id;

    moviesModel.find({"_id": id}, (err, movie) => {
        assert.equal(null, err);
        //console.log("Movie: " + movie);
        res.json(movie);
    });
}