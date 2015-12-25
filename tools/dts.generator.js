'use strict';

var argv = require('minimist')(process.argv.slice(2)),
  bluebird = require('bluebird'),
  fs = require('fs'),
  path = require('path'),
  _ = require('lodash');

var definitionFolder = path.normalize(__dirname + '/../custom-definitions/server/');
var allDefinitionFile = path.normalize(__dirname + '/../custom-definitions/server.d.ts');

var template = "declare module 'MODULENAME' { \r\
var _:any;\r\
export default _;\r\
}";

var referenceTemplate = '/// <reference path="server/FILENAME" />';

var moduleNames = argv._;
if (_.isEmpty(moduleNames)) {
  console.log('No argument = nothing to do !');
  process.exit();
}

var fileCreation = function (modulename, content) {
  return new bluebird(function (resolve, reject) {
    fs.writeFile(definitionFolder + modulename + '.d.ts', content, function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};

var updateServerDefinitionFile = function () {
  return new bluebird(function (resolve, reject) {
    fs.readdir(definitionFolder, function (err, files) {
      if (err) {
        reject(err);
        return;
      }
      var content = _.map(files, function (file) {
        return referenceTemplate.replace('FILENAME', file);
      }).join('\r');
      fs.writeFile(allDefinitionFile, content, function (err) {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    })
  });
};

var promises = _.map(moduleNames, function (moduleName) {
  var content = template.replace('MODULENAME', moduleName);
  return fileCreation(moduleName, content);
});

bluebird.all(promises)
  .then(function () {
    console.log('Definition files created');
    return updateServerDefinitionFile();
  })
  .then(function () {
    console.log('server.td.ts updated');
  })
  .catch(function (err) {
    console.log('Error ' + err);
  });
