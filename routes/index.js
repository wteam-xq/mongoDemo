var express = require('express');
var router = express.Router();
var frontControl = require('../control/frontCtrl');

/* GET home page. */
router.get('/', frontControl.index);
/* GET index page. */
router.get('/index', frontControl.index);

module.exports = router;
