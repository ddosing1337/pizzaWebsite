const sequelize = require("sequelize");
<<<<<<< HEAD
const pizzas = require("../repository/pizza");
=======
const pizzas = require("../repository/pizzas");
>>>>>>> 60c4170f0c3af9992579d57cd4dbdd2ff4d64029

class pizza {
    static createpizza (name,picture,price,ingridients ){
        return pizzas.createPizzas(name,picture,price,ingridients)
    }
    static deletepizza(id){
        return pizzas.removePizzaById(id)
    }
<<<<<<< HEAD
    // static allpizzas (){
    //     return  pizzas.allpizzas()
    // }

    async allpizzas (){
        return await  pizzas.allpizzas()
=======
    static allpizzas (){
        return  pizzas.allpizzas()
>>>>>>> 60c4170f0c3af9992579d57cd4dbdd2ff4d64029
    }
}

//pizza.pizza("sad","sadsa", 111111, "1111")

module.exports = pizza