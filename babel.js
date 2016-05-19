'use strict';

// on the fly es6 + plugins
require('babel-register');
// avoid error await/async "regeneratorRuntime is not defined"
require('babel-polyfill');