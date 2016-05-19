'use strict';

import config from "../config.js";
import app from "./app.js";

const { port, ip } = config;

app.listen(port, ip, function () {
  console.log(`Express server listening on ${port} in ${process.env.NODE_ENV} mode`);
});

export default app;