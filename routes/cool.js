var express = require('express');
var router = express.Router();

/* GET cool user. */
router.get('/', function(req, res, next) {
    res.render('cool', { message: 'You are so cool!' });
});

module.exports = router;