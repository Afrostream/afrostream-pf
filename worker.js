'use strict';

/*
 * single process, can be launched standalone
 * or inside cluster mode.
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// on the fly es6 + plugins
require('./babel.js');

// launching app.
require('./app');