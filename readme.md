# occams-env

> A simple node app env &amp; settings module.

[![npm version](https://badge.fury.io/js/occams-env.svg)](https://badge.fury.io/js/occams-env)&nbsp;[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

### Features

- Built on top of [occams-conf](https://github.com/lxghtless/occams-conf#readme) and [dotenv](https://github.com/motdotla/dotenv#readme)
- Import dotenv envs into [occams-conf](https://github.com/lxghtless/occams-conf#readme) with camel keys automatically.

## First things first...

```
$ npm i occams-env
```


## Usage

### Envs

`occams-env` supports all the envs [occams-conf](https://github.com/lxghtless/occams-conf) does. Additionally, the following can be set.

`OCCAMS_ENV_IMPORT_ENVS`: Enables import of `process.env` keys into `occams-conf` with camel keys.

```js
const occamsEnv = require('occams-env');

occamsEnv.get('home');
//=> /Users/awesome-dev
```

## API

### occamsEnv.get

#### keyPath

Type: `string`

Property path to get from configuration.

## CLI

```
$ npm i -g occams-env
```

```
$ oe --help
Usage
    Search for a key path in the oe configuration.
    $ oe [keyPath]

    Examples
      $ oe home
      /Users/awesome-dev
```
