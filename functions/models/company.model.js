const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let CompanyDetails = new Schema(
  {
    company: {
      type: String,
    },
    email: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("CompanyDetails", CompanyDetails);
