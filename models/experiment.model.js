const mongoose = require('mongoose');

const ExperimentSchema = new mongoose.Schema({
    occurrence: {
        taxon_ids: [Number],   
    },
    scenario_package: {
        projection_scenario: [
          {
            scenario_code: String
          }
        ],
        model_scenario: {
          scenario_code: String
        }
      },
      sdm: {
        algorithm: [
          {
            code: String,
            parameters: Object
          }
        ]
      },
      pam_stats: {
        compute_pam_stats: Number
      },
      archive_name: String
});

const Experiment = mongoose.model("Experiment", ExperimentSchema);
module.exports = Experiment;