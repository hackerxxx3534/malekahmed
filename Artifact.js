const mongoose = require("mongoose");

const artifactSchema = new mongoose.Schema({
  name: String,
  origin: String,
  age: Number,
  description: String
});

module.exports = mongoose.model("Artifact", artifactSchema);