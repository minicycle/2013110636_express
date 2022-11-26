exports.index = (req, res, next) => {
    //res.send('Hello Kitty');
    res.status(200).json({
      fullname: 'Thanarat Pongjan'
    })
  }

exports.bio = (req, res, next) => {
    res.status(200).json({
      fullname: 'Thanarat Pongjan',
      nickname: 'Ikkyu',
      hobby: 'Travel',
      gitusername: 'minicycle'
    })
  }