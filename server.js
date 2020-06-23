const express = require('express');
const database = require('./DB/database');
const personModel= require('./DB/schemas');
require('dotenv').config();
const mongoose = require('mongoose');
const assert = require('assert');

const url = process.env.MONGO_DB_CLUSTER0_PSW;

// Connect to mongo
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },  
  function (err, db) {
    assert.equal(null, err);

    console.log('MongoDB connected to ' + url + '...');  
});
  
  const app = express();
  
  app.get('/api/customers', (req, res) => {
        
    personModel.find({ }, function(err, person){
      assert.equal(null, err);
      console.log("Person: " + person );
      res.json(person);
    }) 
  });
  
  const port = process.env.PORT || 5000;
  
  app.listen(port, () => `Server running on port ${port}`);