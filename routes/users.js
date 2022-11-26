var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello Kitty');
  res.status(200).json({
    fullname: 'Thanarat Pongjan'
  })
});

router.get('/bio', function(req, res, next) {
  //res.send('Hello Kitty');
  res.status(200).json({
    fullname: 'Thanarat Pongjan',
    nickname: 'Ikkyu',
    hobby: 'Travel',
    gitusername: 'minicycle'
  })
});

module.exports = router;
