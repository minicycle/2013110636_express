const Shop = require("../models/shop")
const Menu = require("../models/menu")

exports.comp = async (req, res, next) => {
    const shops = await Shop.find().select('name photo location').sort({_id:-1})
    //const shops = await Shop.find().populate('menu')
  
    const shopWithPhotoDomain = shops.map((shop,index)=>{
      return{
        id:shop._id,
        name:shop.name,
        photo:'http://localhost:3000/images/' + shop.photo,
        location:shop.location
      }
    })

    res.status(200).json({
      data: shopWithPhotoDomain,
    })
  }

  exports.me = async (req, res, next) => {
    //const menu = await Menu.find().sort({ _id: -1 })
    //const menu = await Menu.find().select('+name -price')
    //const menu = await Menu.find().where('price').gt(200)
    const menu = await Menu.find().populate('shop')

    res.status(200).json({
      data: menu,
    })
  }


  exports.show = async (req, res, next) => {
    try {
      const { id } = req.params
      const shops = await Shop.findOne({_id: id,}).populate('menus')

      if(!shops){
          throw new Error('ไม่พบผู้ใช้งาน')
      }else{
          res.status(200).json({
              data: shops,
          })
      }
} catch (error) {
      res.status(400).json({
          error:{ 
              message:'เกิดข้อผิดพลาด: ' + error.message
          }
         
      })
  }
  }