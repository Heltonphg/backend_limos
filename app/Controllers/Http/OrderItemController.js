'use strict'

const OrderItem = use('App/Models/OrderItem')

class OrderItemController {

  async index({ request }) {
    const { order_id } = request.headers()
    const orders = await OrderItem.query()
      .where('order_id', order_id)
      .fetch()
    return orders
  }


  async store({ request, response }) {
  }


  async show({ params, request, response, view }) {
  }


  async update({ params, request, response }) {
  }


  async destroy({ params, request, response }) {
  }
}

module.exports = OrderItemController