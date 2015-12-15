/// <reference path="../typings/tsd.d.ts" />

var bodyParser = require('body-parser'),
    configUtils = require('./utils/configUtils'),
    cookieParser = require('cookie-parser'),
    express = require('express'),
    favicon = require('serve-favicon'),
    helmet = require('helmet');

var configPath = configUtils.getConfigPath();
var config = require(configPath);

import Logger from './config/logger';
import Dog from './classes/Dog';
import Animal from './interfaces/Animal';
import FoodType from './enums/FoodType';

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet()); // config https://www.npmjs.com/package/helmet
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, ()=> {
    var host = server.address().address;
    var port = server.address().port;

    Logger.info('Example app listening at http://%s:%s', host, port);
});

app.get('/test', (req, res)=> {
    var doge:Dog = new Dog(1, FoodType.Carnivorous, true, 'Doge');
    res.send(200, doge);
});
