const express = require('express');
const assert = require('assert');
const db = require('./DB/database')
const router = require('./router/api');
const moviesModel = require('./DB/schemas.Movies');
require('dotenv').config();

const app = express();

app.get('/api/users', router.users);

app.get('/api/customers', router.customers);

app.get('/api/movies', router.movies);
app.get('/api/movies/:id', router.movieId);

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);