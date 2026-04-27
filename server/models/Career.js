const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  title: String,
  skills: [String],
  description: String
});

module.exports = mongoose.model("Career", careerSchema);