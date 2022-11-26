exports.comp = (req, res, next) => {
    
    res.status(200).json({
      data:[
        {
            id:1,
            name:"Charoen Pokphand Group",
            address: {
                province: "Bangkok",
                postcode: 10220
            }
        },
        {
            id:2,
            name:"Bangkok Dock Co., (1957) Ltd.",
            address: {
                province: "Bangkok",
                postcode: 10120
            }
        },
        {
            id:3,
            name:"Bangkok Synthetics Co.,LTD.",
            address: {
                province: "Bangkok",
                postcode: 10120
            }
        }
      ]
    })
  }