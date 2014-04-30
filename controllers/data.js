/* MakerTracker
 * Controllers for providing raw data
 * Copyright 2014 Sam Gruber
 */

var MIN_GROUP = 1;
var MAX_GROUP = 19;
function randomGroup() {
  return (Math.random() * (MAX_GROUP-MIN_GROUP)) + MIN_GROUP;
}

exports.cached = function(req,res) {
  // Acquire data
  var projects = [
    { name: 'puppet', size: 16440 },
    { name: 'vagrant', size: 5913 },
    { name: 'capistrano', size: 464 }
  ];
  var persons = ['Thomas Jefferson', 'James Madison'];

  var out = "";
  // Start JSON file
  out += '{\n';

  // Nodes
  out += '  "nodes": [\n';
  for (var iProject = 0; iProject < projects.length; iProject++) {
    out += '    { "name": "';
    out += projects[iProject].name;
    out += '", "type": "project", "size": ';
    out += projects[iProject].size;
    out += ' },\n';
  }
  for (var iPerson = 0; iPerson < persons.length; iPerson++) {
    out += '    { "name": "';
    out += persons[iPerson];
    out += '", "type": "person", "group": ';
    out += randomGroup();
    out += ' },\n';
  }
  out = out.slice(0,-2);
  out += '\n';
  out += '  ],\n';

  // Links
  out += '  "links": [\n';
  out += '    { "source": 3, "target": 0, "value": 1 },\n'
  out += '    { "source": 4, "target": 2, "value": 1 }\n'
  out += '  ]\n';

  // End JSON file
  out += '}\n';

  res.send(out);
}