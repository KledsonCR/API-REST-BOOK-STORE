const { Router } = require('express');
const Articles = require('./articlesRouter');

module.exports = (server) => {
	server.use((req, res, next) => {
		Articles(server, new Router());

		next();
	});
};