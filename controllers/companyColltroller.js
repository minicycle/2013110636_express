const Company = require('../models/company')
exports.comp = async(req, res, next) => {
    
    const company = await Company.findOne()

    res.status(200).json({
      data: company
    })
  }