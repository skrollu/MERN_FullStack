const express = require('express');
const router = express.Router();

const customersModel = require('../../Database/schemas/Customers')
const assert = require('assert');

/**
 * @route /api/customers
 * @access PUBLIC
 * @request GET
 */
router.get('/', function (req, res) {
    //console.log("/api/customers...");

    customersModel.find({}, function (err, customers) {
        assert.equal(null, err);
        //console.log("Customers: " + customers);
        res.json(customers);
    });
});

/**
 * @route /api/customers
 * @access PRIVATE
 * @request POST
 */
router.post('/', function (req, res) {

    const newCustomer = new customersModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    newCustomer.save().then(customer => res.json(customer));
});

module.exports = router;