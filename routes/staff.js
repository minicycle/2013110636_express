var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')
const { body } = require('express-validator')

router.get('/', staffController.index);

/* http://localhost:3000/staff/63942dcdce93112134c280f8 */
router.get('/:id', staffController.show);

router.post('/',[
    body('name').not().isEmpty().withMessage("กรุณากรอกชื่อ-สกุล"),
    body('salary').not().isEmpty().withMessage("กรุณากรอกเงินเดือน").isNumeric().withMessage("กรุณากรอกตัวเลขเท่านั้น"),
], staffController.insert);

router.delete('/:id', staffController.drop);

router.put('/:id', staffController.update);

module.exports = router;