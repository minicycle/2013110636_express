var express = require('express');
var router = express.Router();
const staffColltroller = require('../controllers/staffColltroller')

/*GET users listing */
router.get('/', staffColltroller.comp);

/*http://localhost:3000/staff/63942d9de94ce7368cf4e4ed */
router.get('/:id', staffColltroller.show);
router.delete('/:id', staffColltroller.destroy);
router.put('/:id', staffColltroller.update);
router.post('/', staffColltroller.insert);



module.exports = router;