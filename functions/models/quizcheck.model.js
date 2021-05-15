const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Quizcheck = new Schema(
  {
    isQuiz: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Quizcheck", Quizcheck);
