//------------------------------
//Dependencies
//------------------------------
require("dotenv").config();
const express = require('express');
const morgan = require("morgan");
const DrinkRouter = require("./controllers/drink")
const FoodRouter = require("./controllers/food")
console.log('Listening to PORT 4000')


//------------------------------
//Global Variables
//------------------------------


//------------------------------
//Create Application Object
//------------------------------
const app = express();//create our app object



//------------------------------
//Middleware
//------------------------------
app.use(morgan('tiny'))
app.use("/drink", DrinkRouter)
app.use("/food", FoodRouter)
app.use("/static", express.static("public"))
//------------------------------
//Routes
//------------------------------
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

//router.get("/", (req, res) => {
  //  res.get(drinks_index.ejs)
//})






app.listen(4000)