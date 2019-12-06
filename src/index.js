const de = require('dotenv');
const camelcaseKeys = require('camelcase-keys');

const deConfig = camelcaseKeys(de.config().parsed);
let envJson;

if (process.env.OCCAMS_ENV_IMPORT_ENVS === 'true') {
	const envParts = {};

	const envIsValid = envar => (process.env[envar] !== undefined && process.env[envar] !== null && process.env[envar] !== '');

	for (const envar in process.env) {
		if ({}.hasOwnProperty.call(process.env, envar)) {
			if (envIsValid(envar)) {
				envParts[envar] = process.env[envar];
			}
		}
	}

	envJson = {...camelcaseKeys(envParts), ...deConfig};
}

if (!envJson) {
	envJson = deConfig;
}

const config = require('occams-conf');

config[config.ClientSymbol].write(envJson);

module.exports = config;
