const express = require("express");
const path = require("path");
const cors = require("cors");

const pizzas = require("./models/pizza");
const pizzaRouter = require("./routes/pizza");
const orderRouter = require("./routes/order");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.get("/" ,(req,res) =>{

//     res.json({"hello world": "hi"})

//     // res.send("Hello world")
// })

app.get("/", (req, res) => {
  let x = async function () {
    let y = await pizzas.findAll().then((name) => {
      console.log(name);
    });
    //console.log(y)
    //res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.json(y);
  };
  x();
  // res.send("Hello world")
});

app.use(pizzaRouter);
app.use(orderRouter);

async function start() {
  app.listen(4000, () => {
    console.log(`Example app listening at http://localhost:${4000}`);
  });
}
start();
