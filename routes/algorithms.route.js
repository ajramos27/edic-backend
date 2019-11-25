var express = require('express');
var router = express.Router();
const AlgorithmModel = require('../models/algorithm.model');

/* GET all */
router.get('/getall', async (req, res) => {
    const algorithms = await AlgorithmModel.find({});
    try {
      res.send(algorithms);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = router;
