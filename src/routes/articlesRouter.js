const ArticlesController = require('../app/controllers/ArticlesController');

module.exports = (server, routes, prefix = '/api/v1/articles') => {
  routes.post('/', ArticlesController.create);
  routes.get('/', ArticlesController.find);
  routes.get('/:id', ArticlesController.findById);
  routes.put('/:id', ArticlesController.update);
  routes.delete('/:id', ArticlesController.delete);

  server.use(prefix, routes);
};
