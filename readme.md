# occams-env

> A simple node app env &amp; settings module.

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## First things first...

```
$ npm i occams-env
```


## Usage

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
      $ oe [keyPath]

    Examples
      $ oe home
      /Users/awesome-dev
```
