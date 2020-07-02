const express = require('express');
const assert = require('assert');
const db = require('./DB/database')
require('dotenv').config();

const app = express();

const users = require('./routes/api/users')
app.use('/api/users', users);

const customers = require('./routes/api/customers')
app.use('/api/customers', customers);

const movies = require('./routes/api/movies')
app.use('/api/movies', movies);

/* const starWarsBooks = require('./routes/api/starWarsBooks')
app.use('/api/starWarsBooks', starWarsBooks);
 */

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);