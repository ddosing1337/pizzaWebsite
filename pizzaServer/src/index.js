const express = require('express')
const path = require("path")
<<<<<<< HEAD

const pizzas    = require("./models/pizza");
const pizzaRouter = require("./routes/pizza")
const app = express()



app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

// app.get("/" ,(req,res) =>{
    
//     res.json({"hello world": "hi"})
   
//     // res.send("Hello world")
// })

app.get("/" ,(req,res) =>{
    let x  = async function (){
     let y = await  pizzas.findAll()
      //console.log(y)
      console.log(res.json(y))
     
    }
    x()
    // res.send("Hello world")
})


app.use(pizzaRouter)


=======
const pizzaRouter = require("./routes/pizza")

const app = express()



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/" ,(req,res) =>{
    res.json({"hello world": "hi"})
})
app.use(pizzaRouter)

>>>>>>> 60c4170f0c3af9992579d57cd4dbdd2ff4d64029
async function start() {
    app.listen(4000, () => {
        console.log(`Example app listening at http://localhost:${4000}`)
    })
}
start()