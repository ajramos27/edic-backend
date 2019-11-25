const mongoose = require('mongoose');

const SDMProjectionSchema = new mongoose.Schema({
  name: String,
  id: {type: Number, required: true},
  url: String,
  epsg: String,
  modificationTime: Date
});

const SDMProjection = mongoose.model("SDMProjection", SDMProjectionSchema);
module.exports = SDMProjection;