const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Support = new Schema({
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
    description: {
        type: String
    },
},{
    timestamps:true,
});
module.exports = mongoose.model('Support', Support);