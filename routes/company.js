var express = require('express');
var router = express.Router();
const companyColltroller = require('../controllers/companyColltroller')

router.get('/', companyColltroller.comp); //get

router.get('/:id', companyColltroller.show); //get by id
router.post('/', companyColltroller.insert); //insert
router.delete('/:id', companyColltroller.destroy); //delete
router.put('/:id', companyColltroller.update); //update

module.exports = router;