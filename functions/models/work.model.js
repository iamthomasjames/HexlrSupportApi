const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let WorkDetails = new Schema(
  {
    company: {
      type: String,
    },
    hours: {
      type: String,
    },
    date: {
      type: String,
    },
    cost: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("WorkDetails", WorkDetails);
