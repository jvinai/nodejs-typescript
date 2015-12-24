/// <reference path="../../../custom-definitions/server.d.ts" />
/// <reference path="../../../typings/tsdx.d.ts" />

import minimist from 'minimist';

var argv = minimist(process.argv.slice(2));

var ConfigUtils = {
    getConfigPath(): string {
        if (!argv.c && !process.env.configServerPath) {
            throw new Error('Missing configuration path argument, must start node with "-c CONFIG_FILE_PATH" or with var env "configServerPath"');
        }
        var path =  argv.c ? argv.c : process.env.configServerPath;
        return require(path);
    }
};

export = ConfigUtils;
