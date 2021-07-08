const mongoose = require('mongoose');
const assert = require('assert');
require('dotenv').config();

const url = process.env.DATABASE_URL_CLUSTER_ADMIN || process.env.DATABASE_URL_CLUSTER_READ_ONLY;

// Connect to mongo
let db = mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true },  
  function (err, db) {
    assert.equal(null, err);    
});

module.exports = db;

