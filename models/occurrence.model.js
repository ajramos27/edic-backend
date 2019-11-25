const mongoose = require('mongoose');

const OccurrenceSchema = new mongoose.Schema({
  name: String,
  id: {type: Number, required: true},
  url: String,
  epsg: String,
  modificationTime: Date
});

const Occurrence = mongoose.model("Occurrence", OccurrenceSchema);
module.exports = Occurrence;