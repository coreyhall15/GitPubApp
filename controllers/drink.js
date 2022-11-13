//Dependencies
const express = require('express')
const Drink = require("../models/drink")

//Router Object
const router = express.Router()

//Register Routes

//Index Routes..GET list of drinks
router.get("/", (req, res) => {
    res.render("drinks_index.ejs", {
        drinks: Drink.getAll()
    })
})
//Define Show Route -----/drink/:id
router.get("/:id", (req, res) =>{
    res.render("show.ejs", {
        drink: Drink.getOne(req.params.id)
    })
})

//Export Router
module.exports = router