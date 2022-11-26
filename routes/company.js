var express = require('express');
var router = express.Router();
const companyColltroller = require('../controllers/companyColltroller')

router.get('/', companyColltroller.comp);

module.exports = router;