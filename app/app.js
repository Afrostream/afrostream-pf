'use strict';

import AfrostreamNodeApp from 'afrostream-node-app';
import config from '../config.js';
import routes from './routes.js';

import afrostreamMiddlewareError from 'afrostream-node-middleware-error';

const { basicAuth } = config;

const app = AfrostreamNodeApp.create({basicAuth: basicAuth, views: __dirname + '/views'});
// all routes are noCache()
app.use((req, res, next) => { res.noCache(); next(); });
//
app.use(routes);
//
app.use(afrostreamMiddlewareError);

export default app;