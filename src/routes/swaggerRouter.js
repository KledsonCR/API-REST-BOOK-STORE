const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../app/docs/swagger.json');

module.exports = (server, routes, prefix = '/') => {
	routes.use('/', swaggerUi.serve); 
	routes.get('/', swaggerUi.setup(swaggerDocs));
	
	server.use(prefix, routes);
};
