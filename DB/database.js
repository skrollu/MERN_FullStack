/* const mongoose = require('mongoose');

function databaseOperation(url, base, collection, operation){

    // Connect to mongo
    mongoose.connect(url + base, { useNewUrlParser: true, useUnifiedTopology: true },
        function (err, db) {
            if (err) {
                throw err;
            }

            let collec = db.collection(collection);

            console.log('MongoDB connected to ' + url + base + '/' + collection + '...');

            switch(operation){
                case "FIND": const a = Person.find({}, (err, person) => { if (err) return handleError(err); }); console.log(a); return a;
                default: console.log("default case");
            }

        });
} */

//module.exports = require('./mongo');
//export default (mongoConnect) =