/// <reference path="../../typings/tsd.d.ts" />

var bodyParser = require('body-parser'),
    configUtils = require('./utils/configUtils'),
    cookieParser = require('cookie-parser'),
    express = require('express'),
    favicon = require('serve-favicon'),
    helmet = require('helmet'),
    passport = require('passport'),
    OAuth2Strategy = require('passport-oauth2');

var configPath = configUtils.getConfigPath();
var config = require(configPath);

import logger from './config/logger';

import Dog from './classes/Dog';
import Animal from './interfaces/Animal';
import FoodType from './enums/FoodType';

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet()); // config https://www.npmjs.com/package/helmet
app.use(express.static(__dirname + '/public'));
/*passport.use(new OAuth2Strategy(config.oauth2.options,
    function (accessToken, refreshToken, profile, done) {
        logger.info('accessToken ' + accessToken);
        logger.info('refreshToken ' + refreshToken);
        logger.info('profile ' + profile);
        done();
    }
));
app.use(passport.initialize());
app.use(passport.session());
*/

var server = app.listen(3000, ()=> {
    var host = server.address().address;
    var port = server.address().port;

    logger.info('Example app listening at http://%s:%s', host, port);
});

app.get('/test', (req, res)=> {
    var doge:Dog = new Dog(1, FoodType.Carnivorous, true, 'Doge');
    res.send(200, doge);
});
/*
app.get('/login',
    passport.authenticate('oauth2', { successRedirect: '/test',
        failureRedirect: '/fail' }));

app.get('/t', passport.authenticate('oauth2', {failureRedirect: '/fail'}), (req, res)=> {
    res.send(200, 'fail');
});

app.get('/fail', (req, res)=> {
    res.send(200, 'fail');
});*/
