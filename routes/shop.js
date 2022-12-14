var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')

router.get('/', shopController.comp);

router.get('/menu', shopController.me);

router.get('/:id', shopController.show);

module.exports = router;