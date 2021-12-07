const express = require("express");
const orderService = require("../service/order");
const Response = require("../help/Response");

class orderController {
  static createOrder(req, res) {
    console.log(req.body);
    orderService.createOrder(
      req.body.order_list,
      req.body.name,
      req.body.surname,
      req.body.address,
      req.body.phone,
      req.body.additions
    );
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader(
    //   "Access-Control-Allow-Methods",
    //   "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    // );
    // res.setHeader(
    //   "Access-Control-Allow-Headers",
    //   "Origin, Content-Type, X-Auth-Token"
    // );
    return res.json(new Response("200", "Order successful added"));
  }
}

module.exports = orderController;
