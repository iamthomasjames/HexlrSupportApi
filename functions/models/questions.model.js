const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Questions = new Schema(
  {
    question: {
      type: {type: String, required: [true, "can't be blank"]},
    },
    option1: {
      type: {type: String, required: [true, "can't be blank"]},
    },
    option2: {
      type: {type: String, required: [true, "can't be blank"]},
    },
    option3: {
      type: {type: String, required: [true, "can't be blank"]},
    },
    option4: {
      type: {type: String, required: [true, "can't be blank"]},
    },
    isImage: {
        type:{type: String, required: [true, "can't be blank"]},
      },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Questions", Questions);
