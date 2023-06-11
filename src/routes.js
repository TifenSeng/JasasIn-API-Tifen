const {
  addCategoryHandler,
  deleteCategoryHandler,
  updateCategoryHandler,
  getCategoryHandler
} = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/categories',
    handler: addCategoryHandler
  },
  {
    method: 'PUT',
    path: '/categories/{id}',
    handler: updateCategoryHandler
  },
  {
    method: 'DELETE',
    path: '/categories/{id}',
    handler: deleteCategoryHandler
  },
  {
    method: 'GET',
    path: '/categories',
    handler: getCategoryHandler
  }
]

module.exports = routes
