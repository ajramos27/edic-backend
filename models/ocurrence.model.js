const mongoose = require('mongoose');

const OcurrenceSchema = new mongoose.Schema({
  name: {type: String, required: true},
});

const Ocurrence = mongoose.model("Ocurrence", OcurrenceSchema);
module.exports = Ocurrence;