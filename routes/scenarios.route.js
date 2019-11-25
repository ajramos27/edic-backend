var express = require('express');
var router = express.Router();
const ScenarioModel = require('../models/scenario.model');

/* GET all */
router.get('/', async (req, res) => {
    const scenarios = await ScenarioModel.find({});
    try {
      res.send(scenario);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = router;