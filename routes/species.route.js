var express = require('express');
var router = express.Router();
//const OcurrenceModel = require('../models/ocurrence.model');
const request = require('request');


/* GET Data from WIKI */
router.get('/getwiki', async (req, res) => {
    request('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+ req.query.name , function (error, response, body) {
        try {
            res.send(body);
          } catch (err) {
            res.status(500).send(err);
          }   
    }); 
    
});

module.exports = router;