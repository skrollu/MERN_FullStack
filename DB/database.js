/* const mongoose = require('mongoose');
const assert = require('assert');
require('dotenv').config();

const url = process.env.MONGO_DB_CLUSTER0_PSW;

// Connect to mongo
const mongoConnect = function(){
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
        function (err, db) {
            assert.equal(null, err);
            
            console.log('MongoDB connected to ' + url + '...');
        });
    return mongoose;
    }

module.exports = mongoConnect(); */

/* const mongoClose = function (mongoose){
    mongoose.close(function(err, res){
        assert.equal(null, err);
        console.log('MongoDB closed !');
    });
} */

//module.exports = mongoClose();