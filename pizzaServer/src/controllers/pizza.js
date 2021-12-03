const express = require('express')
<<<<<<< HEAD
const pizzaService = require("../service/pizza");
const Response = require("../help/Response")


class pizzaController {
    static createPizzas(req, res) {
        pizzaService.createpizza(req.body.name,req.body.picture, req.body.price, req.body.ingridients);
        return res.json(new Response("200", "Pizza sacsessful added"))
    }
    static deletePizzas(req, res) {
        pizzaService.deletepizza(req.body.id);
        return res.json(new Response("200", "Pizza sacsessful deleted"))
    }
    async all(req, res) {
        let y = await pizzaService.allpizzas
         return res.json(y)
    }

    

}

module.exports = pizzaController
=======
const pizzaController = require("../service/pizza");
const Response = require("../help/Response")


class pizza {
    static createPizzas(req, res) {
        pizzaController.createpizza(req.body.name,req.body.picture, req.body.price, req.body.ingridients);
        return res.json(new Response("200", "Pizza sacsessful added"))
    }
    static deletePizzas(req, res) {
        pizzaController.deletepizza(req.body.id);
        return res.json(new Response("200", "Pizza sacsessful deleted"))
    }
    static allPizzas(req, res) {
        let y = pizzaController.allpizzas()
         return res.json(y)
        
    }
}

module.exports = pizza
>>>>>>> 60c4170f0c3af9992579d57cd4dbdd2ff4d64029

