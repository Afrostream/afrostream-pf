/// <reference path="../typings/index.d.ts"/>
// @see https://www.typescriptlang.org/docs/handbook/modules.html

"use strict";

import Cluster from 'afrostream-node-cluster';
import App from './app';

const cluster = new Cluster();
cluster.on('worker.spawned', () => {
  new App();
});
cluster.start();
