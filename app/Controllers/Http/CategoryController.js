'use strict'

const Category = use('App/Models/Category')

class CategoryController {

  async index({ }) {
    const categories = await Category.all()
    return categories
  }


  async store({ request }) {
    const name = request.only(['name'])
    const category = await Category.create(name)
    return category

  }

  async show({ params }) {
    const category = await Category.findOrFail(params.id)
    return category
  }


  async update({ params, request }) {
    const name = request.only(['name'])
    const category = await Category.findOrFail(params.id)
    category.merge(name)
    await category.save()
    return category
  }

  async destroy({ params, request, response }) {
    const category = await Category.findOrFail(params.id)
    await category.delete()
  }

}

module.exports = CategoryController
