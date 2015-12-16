var express = require('express'),
  bodyParser = require('body-parser'),
  memorystore = require('./model.js'),
  oauthserver = require('oauth2-server');

//https://github.com/thomseddon/node-oauth2-server
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.oauth = oauthserver({
  model: memorystore, // See below for specification
  grants: ['password'],
  debug: true
});

app.all('/oauth2/token', app.oauth.grant());

app.get('/oauth2/authorize', app.oauth.authorise());

app.use(app.oauth.errorHandler());

app.listen(4000, function() {
  console.log('oauth2 mock server started')
});