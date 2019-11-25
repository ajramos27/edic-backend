var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

var users = require('./routes/users');

var algorithms = require('./routes/algorithms.route');
var occurrences = require('./routes/ocurrences.route');
var species = require('./routes/species.route');
var scenarios = require('./routes/scenarios.route');
var experiments = require('./routes/experiments.route');


var app = express();

// Set up mongoose connection
mongoose.connect('mongodb://localhost:27017/elseweb', {
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())

let reporter = function (type, ...rest)
{
	// remote reporter logic goes here
};

/* handle an uncaught exception & exit the process */
process.on('uncaughtException', function (err)
{
	console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
	console.error(err.stack);

	reporter("uncaughtException", (new Date).toUTCString(), err.message, err.stack);

	process.exit(1);
});

/* handle an unhandled promise rejection */
process.on('unhandledRejection', function (reason, promise)
{
	console.error('unhandled rejection:', reason.message || reason);

	reporter("uncaughtException", (new Date).toUTCString(), reason.message || reason);
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api/v1/users', users);

//Elseweb
app.use('/api/v1/algorithms', algorithms);
app.use('/api/v1/occurrences', occurrences);
app.use('/api/v1/species', species);
//app.use('/api/v1/scenarios', scenarios);
app.use('/api/v1/experiments', experiments);


module.exports = app;
