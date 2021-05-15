const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Questions = new Schema(
  {
    question: {
      type: String,
    },
    option1: {
      type: String,
    },
    option2: {
      type: String,
    },
    option3: {
      type: String,
    },
    option4: {
      type: String,
    },
    isImage: {
        type: String,
      },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Questions", Questions);
