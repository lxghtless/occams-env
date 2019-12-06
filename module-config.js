module.exports = {
	home: process.env.OCCAMS_ENV_HOME || process.env.HOME,
	environment: process.env.OCCAMS_ENV || process.env.OCCAMS_CONF_ENV || process.env.NODE_ENV
};
