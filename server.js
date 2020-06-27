const express = require('express');
const assert = require('assert');
const db = require('./DB/database')
const customersModel = require('./DB/schemas.Customers');
const moviesModel = require('./DB/schemas.Movies');
const usersModel = require('./DB/schemas.Users')
var router = express.Router();
require('dotenv').config();

const app = express();

app.get('/api/users', (req, res) => {
  console.log('/api/users...');

  usersModel.find({}, (err, users) => {
    assert.equal(null, err);
    //console.log("Users: " + users);
    res.json(users);
  });
});

app.get('/api/customers', (req, res) => {
  console.log("/api/customers...");

  customersModel.find({}, function (err, customers) {
    assert.equal(null, err);
    //console.log("Customers: " + customers);
    res.json(customers);
  });
});

app.get('/api/movies', (req, res) => {
  console.log('/api/movies...');
  
  moviesModel.find({}, (err, movies) => {
    assert.equal(null, err);
    //console.log("Movies: " + movies);
    res.json(movies);
  }).sort({ title: 1 });
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);