/// <reference path="../typings/index.d.ts"/>
/// <reference path="../typings/express-cluster/express-cluster.d.ts"/>
// @see https://www.typescriptlang.org/docs/handbook/modules.html

"use strict";

import * as cluster from "express-cluster";
import Worker from "./worker";

const clusterConf = { count: process.env.WEB_CONCURRENCY || 1, verbose: true};

cluster(workerInfo => {
  console.log(`worker ${workerInfo.id} is up`);
  const worker = new Worker(workerInfo.id);
  worker.start();
}, clusterConf);
