/// <reference path="../../typings/tsd.d.ts" />

process.env.loggerPath = process.env.loggerPath ? process.env.loggerPath : '/var/log/server.log';

var config = {
    oauth2: {
        options: {
            authorizationURL: 'http://localhost:4000/oauth2/authorize',
            tokenURL: 'http://localhost:4000/oauth2/token',
            clientID: 'TEST_ID',
            clientSecret: 'TEST_SECRET',
            callbackURL: "http://localhost:4000/login"
        }
    }
};

export = config;
