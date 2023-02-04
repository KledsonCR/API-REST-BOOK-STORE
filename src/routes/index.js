const { Router } = require('express');
const Articles = require('./articlesRouter');
const Swagger = require('./docs/swaggerRouter');

module.exports = (server) => {
  server.use((req, res, next) => {
    Articles(server, new Router());
    Swagger(server, new Router());
    next();
  });
};
