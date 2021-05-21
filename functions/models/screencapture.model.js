const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ScreenCapture = new Schema(
  {
    screens: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("ScreenCapture", ScreenCapture);
