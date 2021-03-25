const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Debug = new Schema({
    log:{
        type:String
    },
    page:{
        type:String
    },
  
},{
    timestamps:true,
});
module.exports = mongoose.model('Debug', Debug);