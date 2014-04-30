var express = require('express'),
    mongoose = require('mongoose');

var app = express();

// Establish database connection
mongoose.connect('mongodb://localhost/makertracker');

// Set static directory
app.use('/static', express.static(__dirname + '/static'));

// Set views config
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals.pretty = true;

// Define routes
require('./routes')(app);

var port = 31459;
app.listen(port);
console.log('MakerTracker listening on ' + port);