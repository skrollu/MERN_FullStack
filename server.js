const express = require('express');
const db = require('./Database/database');
require('dotenv').config();

const app = express();
app.use(express.json());

const users = require('./routes/api/users')
app.use('/api/users', users);

const customers = require('./routes/api/customers')
app.use('/api/customers', customers);

const movies = require('./routes/api/movies')
app.use('/api/movies', movies);

const movie = require('./routes/api/movie')
app.use('/api/movie', movie);

const starWarsBooks = require('./routes/api/starwarsbooks');
app.use('/api/starWarsBooks', starWarsBooks);

const starWarsBook = require('./routes/api/starwarsbook');
app.use('/api/starWarsBook', starWarsBook);



const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);