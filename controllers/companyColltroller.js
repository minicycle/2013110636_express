const Company = require('../models/company')
exports.comp = async(req, res, next) => {
    const company = await Company.find().sort({ _id: -1 })

    res.status(200).json({
      data: company
    })
  }

  exports.show = async (req, res, next) => {
    try {
          const { id } = req.params
          const company = await Company.findOne({
          // _id : req.params.id
          _id: id,
          })
  
          if(!company){
              throw new Error('ไม่พบผู้ใช้งาน')
          }else{
              res.status(200).json({
                  data: company,
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

  exports.insert = async (req, res, next) => {
    const { name, address } = req.body
  
    let company = new Company({
      name: name,
      address:{
        province : address.province
      }
    })
    await company.save()
  
    res.status(200).json({
      message: 'เพิ่มข้อมูลเรียบร้อยแล้ว',
    })
  }
  
exports.destroy = async (req, res, next) => {
    try {
          const { id } = req.params
          const company = await Company.deleteOne({
        
            _id: id,
          })
          if(company.deletedCount === 0){
            throw new Error('ไม่สามารถลบข้อมูลได้ / ไม่พบข้อมูลผู้ใช้งาน')
          }else{
            res.status(200).json({
                message: 'ลบข้อมูลเรียบร้อยแล้ว',
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


  exports.update = async (req, res, next) => {
    try {
        const{id}= req.params
        const { name, address } = req.body

        const company = await Company.updateOne({ _id : id},{
            name:name,
            address:{
              province : address.province
            }
        })
        //console.log(company)
        res.status(200).json({
            message: 'เพิ่มข้อมูลเรียบร้อยแล้ว',
          })
    } catch (error) {
        res.status(400).json({
            error:{ 
                message:'เกิดข้อผิดพลาด: ' + error.message
            }
           
        })
    }
   
  }