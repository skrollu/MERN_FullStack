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
      //console.log("Person: " + person );
      res.json(person);
    }) 
  });

  app.get('/api/messages', (req, res) => {

  })
  
  const port = process.env.PORT || 5000;
  
 const server = app.listen(port, () => `Server running on port ${port}`);

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', (data) => {
    console.log(data);
  });
});