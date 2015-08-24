[![NPM Version](http://img.shields.io/npm/v/shim-console.svg?style=flat)](https://npmjs.org/package/shim-console)
[![Build Status](http://img.shields.io/travis/royriojas/shim-console.svg?style=flat)](https://travis-ci.org/royriojas/shim-console)

# shim-console
A shim for the global console object. It will do nothing if the console object exists

## Install

```bash
npm i --save shim-console
```

## Usage

```javascript
// at the entry point of your app
require('shim-console').init();

// now you can just do
// console.log, console.debug, etc
// on environment that don't provide the
// console object (probably only ie9 at this time)
```

## License

[MIT](./LICENSE)

## Changelog

[Changelog](./changelog.md)
