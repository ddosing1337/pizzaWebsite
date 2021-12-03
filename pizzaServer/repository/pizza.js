const sequelize = require("sequelize");
const pizzas    = require("../models/pizza");


class pizza{
    static allpizzas(){
       // pizzas.findAll().then(user=>{return (user)})
       pizzas.findAll()
                                    
    }

    static createPizzas(name,picture,price,ingridients){
       return  pizzas.create({
            name: name,
            ingridients: ingridients,
            picture: picture,
            price: price
        })
     
    }

    static removePizzaById(id){
        pizzas.destroy({where: {"id": id}})
      }
    // static findUserByEmail(email){
    //     return users.findAll({where:{email: email }}).then(user=>{console.log(user)})
    // }


}

// console.log(pizza.allpizzas())
// pizza.createPizzas("vsafdsaax","xsa",11221,"saaabest")
//
module.exports = pizza
