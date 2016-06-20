"use strict";
const afrostream_node_cluster_1 = require('afrostream-node-cluster');
const app_1 = require('./app');
const cluster = new afrostream_node_cluster_1.default();
cluster.on('worker.spawned', () => {
    new app_1.default();
});
cluster.start();
//# sourceMappingURL=server.js.map