const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema({
    name:  {type:String, require:true, trim:true},
    photo:{type:String, default:'nopic.png'},
    location:{
        lat:Number,
        lgn:Number
    },
   // createdAt:{type:Date,default:Date.now},
   // updatedAt:{type:Date,default:Date.now}
  },{
    toJSON:{virtuals:true},
    timestamps: true, // create  : row 11 and 12 auto
    collection: "shops"});

staffSchema.virtual('menus',{
    ref:'Menu',
    localField:'_id',
    foreignField:'shop'
})

const shop = mongoose.model("Shop",staffSchema)

module.exports = shop