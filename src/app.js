const express = require('express');
const cors = require('cors');
const router = require('./routes');
require('./infra/database/mongo');

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(express.json());
  }
  routes() {
    router(this.express);
  }
}

module.exports = new App().express;
