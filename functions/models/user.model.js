const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let User = new Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    answers: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", User);