var express = require('express');
var router = express.Router();
const OccurrenceModel = require('../models/occurrence.model');
const request = require('request');

/* GET all */
router.get('/getall', async (req, res) => {
  const occurrences = await OccurrenceModel.find({});
  try {
    res.send(occurrences);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* GET by id */
router.get('/get', async (req, res) => {
  const occurrence = await OccurrenceModel.findOne(req.query);
  try {
    res.send(occurrence);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* GET metadata from url by id */
router.get('/getmetadata', async (req, res) => {
  const occurrence = await OccurrenceModel.findOne(req.query);
  try {
    console.log(occurrence.url);
    request(occurrence.url, function (error, response, body) {
        try {
            res.send(body);
          } catch (err) {
            res.status(500).send(err);
          }   
    }); 
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;