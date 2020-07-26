const express = require('express');
const router = express.Router();

const usersModel = require('../../Database/schemas/Users')
const assert = require('assert');

/**
 * @route /api/users
 * @access PUBLIC
 * @request GET
 */
router.get('/', function (req, res) {
    usersModel.find({}, function (err, users) {
        assert.equal(null, err);
        res.json(users);
    });
});

/**
 * @route /api/users/:nameOrSurname
 * @access PUBLIC
 * @request GET
 */
router.get('/:nameOrSurname', function (req, res) {
    let nameOrSurname = req.params.nameOrSurname;

    if(nameOrSurname == null){
        console.log("null value received");
    } else {
        if (typeof nameOrSurname === 'string') {
            usersModel.find(
                { $text: { $search: nameOrSurname } },
                { score: { $meta: "textScore" } })
                .sort({ score: { $meta: "textScore" } }
                )
                .exec((err, user) => {
                    assert.equal(null, err);
                    res.json(user);
                });
        } else {
            console.log("ERROR Route: /api/users/:nameOrSurname nameOrSurname is not a string");
        }
    }
});

/**
 * @route /api/users
 * @access PRIVATE
 * @request POST
 */
router.post('/', function (req, res) {

    const newUser = new usersModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save().then(user => res.json(user));
});

module.exports = router;