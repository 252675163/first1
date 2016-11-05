/**
 * Created by Administrator on 2016/11/5.
 */
var express = require('express');
var router = express.Router();

router.get('/:name', function(req, res) {
    res.render('users', {
        name: req.params.name
    });
});

module.exports = router;