const Shop = require("../models/shop")

exports.comp = async (req, res, next) => {
    const shop = await Shop.find().sort({ _id: -1 })
  
    res.status(200).json({
      data: shop,
    })
  }