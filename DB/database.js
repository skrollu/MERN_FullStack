const mongoose = require('mongoose');
const assert = require('assert');
require('dotenv').config();

const url = process.env.MONGO_DB_CLUSTER0_TEST_PSW;

// Connect to mongo
let db = mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true },  
  function (err, db) {
    assert.equal(null, err);

    console.log('MongoDB connected to ' + url + '...');  
    //db.collection("people");

    console.log(db.models)
});

module.exports = db;