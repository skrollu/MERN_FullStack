const express = require('express');
const router = express.Router();

const customersModel = require('../../DB/schemas.Customers')
const assert = require('assert');

router.get('/', function (req, res) {
    console.log("/api/customers...");

    customersModel.find({}, function (err, customers) {
        assert.equal(null, err);
        //console.log("Customers: " + customers);
        res.json(customers);
    });
});

module.exports = router;