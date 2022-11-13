//Dependencies
const express = require('express')
const Food = require("../models/food")

//Router Object
const router = express.Router()

//Register Routes

//Index Routes..GET list of drinks
router.get("/", (req, res) => {
    res.render("food_index.ejs", {
        foods: Food.getAll()
    })
})
//Define Show Route -----/drink/:id
router.get("/:id", (req, res) =>{
    res.render("shows.ejs", {
        food: Food.getOne(req.params.id)
    })
})

//Export Router
module.exports = router