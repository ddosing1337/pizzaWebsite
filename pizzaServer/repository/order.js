const sequelize = require("sequelize");
const orders = require("../models/order");

class orderRepository {
  static createOrder(order_list, name, surname, address, phone, additions) {
    return orders.create({
      order_list: order_list,
      name: name,
      surname: surname,
      address: address,
      phone: phone,
      additions: additions,
    });
  }
}

module.exports = orderRepository;
