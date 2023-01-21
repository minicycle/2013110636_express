var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')
const { body } = require('express-validator')

router.get('/', shopController.index);

router.get('/menu', shopController.menu);

router.get('/:id', shopController.show);

router.post('/',[
    body('name').not().isEmpty().withMessage("กรุณากรอกชื่อ-สกุล"),
    body('location').not().isEmpty().withMessage("กรุณากรอกชื่อ-สกุล"),
    body("location.lat")
      .not()
      .isEmpty()
      .withMessage("กรุณากรอก Lat")
      .isNumeric()
      .withMessage("Lat จะต้องเป็นตัวเลขเท่านั้น"),
    body("location.lgn")
      .not()
      .isEmpty()
      .withMessage("กรุณากรอก Lgn")
      .isNumeric()
      .withMessage("Lgn จะต้องเป็นตัวเลขเท่านั้น")
], shopController.insert);

module.exports = router;