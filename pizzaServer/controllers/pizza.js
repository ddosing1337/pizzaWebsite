const express = require("express");
const pizzaService = require("../service/pizza");
const Response = require("../help/Response");

class pizzaController {
  static createPizzas(req, res) {
    pizzaService.createpizza(
      req.body.name,
      req.body.picture,
      req.body.price,
      req.body.ingridients
    );
    return res.json(new Response("200", "Pizza successful added"));
  }
  static deletePizzas(req, res) {
    pizzaService.deletepizza(req.body.id);
    return res.json(new Response("200", "Pizza successful deleted"));
  }
  async all(req, res) {
    let y = await pizzaService.allpizzas;
    return res.json(y);
  }
}

module.exports = pizzaController;
