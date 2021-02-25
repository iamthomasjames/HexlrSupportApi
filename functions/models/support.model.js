const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Support = new Schema({
    _id:{
        type:String
    },
    name: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    reason: {
        type: String
    },
    status: {
        type: String
    },
    description: {
        type: String
    },
},{
    timestamps:true,
});
module.exports = mongoose.model('Support', Support);