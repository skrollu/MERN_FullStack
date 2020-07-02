const express = require('express');
const router = express.Router();

const usersModel = require('../../DB/schemas.Users')
const assert = require('assert');

router.get('/', function (req, res) {
    console.log("/api/users...");

    usersModel.find({}, function (err, users) {
        assert.equal(null, err);
        //console.log("Users: " + users);
        res.json(users);
    });
});

module.exports = router;