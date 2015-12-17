/// <reference path="../../../typings/tsd.d.ts" />

var argv = require('minimist')(process.argv.slice(2));

var ConfigUtils = {
    getConfigPath(): string {
        if (!argv.c && !process.env.configServerPath) {
            throw new Error('Missing configuration path argument, must start node with "-c CONFIG_FILE_PATH" or with var env "configServerPath"');
        }
        return argv.c ? argv.c : process.env.configServerPath;
    }
};

export = ConfigUtils;
