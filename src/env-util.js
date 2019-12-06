const dotenv = require('dotenv');
const camelcaseKeys = require('camelcase-keys');

const envIsValid = envar =>
	(
		process.env[envar] !== undefined &&
		process.env[envar] !== null &&
		process.env[envar] !== ''
	);

const dotEnvAsJson = () => camelcaseKeys(dotenv.config().parsed);

const envsAsJson = () => {
	const envs = {};

	for (const envar in process.env) {
		if ({}.hasOwnProperty.call(process.env, envar)) {
			if (envIsValid(envar)) {
				envs[envar] = process.env[envar];
			}
		}
	}

	return {...camelcaseKeys(envs)};
};

module.exports = {
	dotEnvAsJson,
	envsAsJson,
	envIsValid
};
