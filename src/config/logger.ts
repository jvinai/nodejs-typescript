/// <reference path="../../typings/tsd.d.ts" />

var path = require('path'),
    winston = require('winston');

var opts = {
    timestamp: function () {
        return new Date().toISOString();
    },
    colorize: true,
    filename: process.env.loggerPath
};

var logger = new winston.Logger({
    levels: {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
    },
    transports: [
        new (winston.transports.Console)(opts),
        new (winston.transports.File)(opts)
    ]
})

export default logger;
