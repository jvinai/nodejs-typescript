'use strict';

var bluebird = require('bluebird'),
  fs = require('fs'),
  path = require('path'),
  tsconfig = require('./../tsconfig.json'),
  walk = require('walk'),
  _ = require('lodash');

var srcFolder = path.normalize(__dirname + '/../src/');
var tsconfigPath = path.normalize(__dirname + '/../tsconfig.json');
var files = [];
var defaultFiles = [
  './typings/tsdx.d.ts',
  './custom-definitions/server.d.ts'
]
var walker = walk.walk(srcFolder, {followLinks: true});
walker.on('file', function (root, fileStat, next) {
  var filename = fileStat.name;
  if (filename.indexOf('.ts', filename.length - '.ts'.length) === -1) {
    next();
    return;
  }
  var fullpath = path.resolve(root, fileStat.name);
  var splitedPath = fullpath.split('src');
  files.push('./src' + splitedPath[1]);
  next();
});
walker.on('errors', function (root, nodeStatsArray, next) {
  nodeStatsArray.forEach(function (n) {
    console.error('[ERROR] ' + n.name)
    console.error(n.error.message || (n.error.code + ': ' + n.error.path));
  });
  next();
}); // plural
walker.on('end', function () {
  var allPaths = defaultFiles.concat(files);
  tsconfig.files = allPaths;
  var content = JSON.stringify(tsconfig, null, 2);
  fs.writeFileSync(tsconfigPath, content);
  console.log('all done');
  process.exit();
});
