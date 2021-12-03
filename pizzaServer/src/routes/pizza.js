const express = require("express");
const pizza = require("../controllers/pizza");
const router = express.Router();

router.post("/addPizza", pizza.createPizzas)
router.post("/delPizza", pizza.deletePizzas)
<<<<<<< HEAD
//router.get("/1", (res,req,err) => {if(err) return err; pizza.allPizzas(res,req)})

module.exports = router


=======
router.get("/1", pizza.allPizzas)

module.exports = router

>>>>>>> 60c4170f0c3af9992579d57cd4dbdd2ff4d64029
