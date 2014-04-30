/* MakerTracker
 * HTTP routes published by the application.
 * Copyright 2014 Sam Gruber
 */

// Load controllers
var display = require('./controllers/display'),
    data = require('./controllers/data');

module.exports = function(app) {
  // Display routes
  app.get('/graph', display.graph);

  // People routes

  // Project routes

  // Data routes
  app.get('/data/cached.json', data.cached);
}