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
    customersModel.find({}, function (err, customers) {
        assert.equal(null, err);
        //console.log("Customers: " + customers);
        res.json(customers);
    });
});

/**
 * @route /api/customers/:firstNameOrlastName
 * @access PUBLIC
 * @request GET
 */
router.get('/:firstNameOrlastName', function (req, res) {
    let firstNameOrlastName = req.params.firstNameOrlastName;

    if (firstNameOrlastName == null) {
        console.log("null value received");
    } else {
        if (typeof firstNameOrlastName === 'string') {
            customersModel.find(
                { $text: { $search: firstNameOrlastName } },
                { score: { $meta: "textScore" } })
                .sort({ score: { $meta: "textScore" } }
                )
                .exec((err, customers) => {
                    assert.equal(null, err);
                    res.json(customers);
                });
        } else {
            console.log("ERROR Route: /api/users/:firstNameOrlastName firstNameOrlastName is not a string");
        }
    }
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