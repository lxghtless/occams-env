// This will need to load from a specific path if used in global module
require('dotenv').config();
const config = require('occams-conf');
const envUtil = require('./env-util');

let envJson;

if (process.env.OCCAMS_ENV_IMPORT_ENVS === 'true') {
	envJson = envUtil.envsAsJson();
}

if (!envJson) {
	envJson = envUtil.dotEnvAsJson();
}

config[config.ClientSymbol].write(envJson);

module.exports = config;
