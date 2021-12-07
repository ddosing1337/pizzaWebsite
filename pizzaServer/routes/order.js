const express = require("express");
const orderController = require("../controllers/order");
const router = express.Router();

router.post("/createOrder", orderController.createOrder);

module.exports = router;
