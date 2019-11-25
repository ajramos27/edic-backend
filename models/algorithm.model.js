const mongoose = require('mongoose');

const AlgorithmSchema = new mongoose.Schema({
  code: {type: String, required: true},
  description: {type: String, required: true},
});

const Algorithm = mongoose.model("Algorithm", AlgorithmSchema);
module.exports = Algorithm;