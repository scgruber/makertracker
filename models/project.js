/* MakerTracker
 * Schema for projects
 * Copyright 2014 Sam Gruber
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var projectSchema = new Schema({
  name: String,
  commits: [ {author: ObjectId, size: Number } ]
});

module.exports = mongoose.model('Project', projectSchema);