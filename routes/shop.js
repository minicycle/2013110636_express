var express = require('express');
var router = express.Router();
const shopColltroller = require('../controllers/shopColltroller')

router.get('/', shopColltroller.index);

module.exports = router;
