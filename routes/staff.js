var express = require('express');
var router = express.Router();
const staffColltroller = require('../controllers/staffColltroller')

router.get('/', staffColltroller.comp);
router.post('/', staffColltroller.insert);

module.exports = router;