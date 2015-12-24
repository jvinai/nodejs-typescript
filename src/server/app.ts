/// <reference path="../../typings/tsdx.d.ts" />
/// <reference path="../../custom-definitions/server.d.ts" />

import bodyParser from 'body-parser';
import * as configUtils from './utils/configUtils';
import cookieParser from 'cookie-parser';
import * as cluster from 'cluster';
import express from 'express';
import favicon from 'serve-favicon';
import helmet from 'helmet';
import passport from 'passport';
import OAuth2Strategy from 'passport-oauth2';
import * as os from 'os';

var config = configUtils.getConfigPath();

import logger from './config/logger';

import Dog from './classes/Dog';
import Animal from './interfaces/Animal';
import FoodType from './enums/FoodType';


if (cluster.isMaster) {
    var cpuCount:number = os.cpus().length;
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

} else {

    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(helmet()); // config https://www.npmjs.com/package/helmet
    app.use(express.static(__dirname + '/public'));
    /*
     passport.use(new OAuth2Strategy(config.oauth2.options,
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
}

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
