const sequelize = require("sequelize");
const orderRepository = require("../repository/order");

class orderService {
  static createOrder(order_list, name, surname, address, phone, additions) {
    return orderRepository.createOrder(
      order_list,
      name,
      surname,
      address,
      phone,
      additions
    );
  }
}

//pizza.pizza("sad","sadsa", 111111, "1111")

module.exports = orderService;
