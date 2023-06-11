const category = require('./index')

const addCategoryHandler = (request, h) => {
  const { id_category, category_name } = request.payload

  const newCategory = {
    id_category,
    category_name
  }

  category.push(newCategory)

  return h.response(newCategory).code(201)
}

const deleteCategoryHandler = (request, h) => {
  const { id } = request.params

  const indexToRemove = category.findIndex((cat) => cat.id_category === parseInt(id))

  if (indexToRemove !== -1) {
    category.splice(indexToRemove, 1)
    return h.response().code(204)
  }

  return h.response().code(404)
}

const updateCategoryHandler = (request, h) => {
  const { id } = request.params
  const { category_name } = request.payload

  const indexToUpdate = category.findIndex((cat) => cat.id_category === parseInt(id))

  if (indexToUpdate !== -1) {
    category[indexToUpdate].category_name = category_name
    return h.response(category[indexToUpdate]).code(200)
  }

  return h.response().code(404)
}

const getCategoryHandler = (request, h) => {
  return h.response(category).code(200)
}

module.exports = {
  addCategoryHandler,
  deleteCategoryHandler,
  updateCategoryHandler,
  getCategoryHandler
}
