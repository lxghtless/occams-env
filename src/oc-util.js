const config = require('occams-conf');

const keyPathsIndex = new Set();

const indexKeyPaths = () => {
	const currentConfig = config.get();
	for (const keyPath in currentConfig) {
		if ({}.hasOwnProperty.call(currentConfig, keyPath)) {
			keyPathsIndex.add(keyPath);
		}
	}
};

const searchKeyPaths = keyPath => {
	const hits = [];
	const conf = config.get();
	for (const kp of [...keyPathsIndex]) {
		if (kp.toLowerCase().includes(keyPath.toLowerCase())) {
			hits.push(`${kp}=${conf[kp]}`);
		}
	}

	return hits;
};

module.exports = {
	indexKeyPaths,
	searchKeyPaths
};
