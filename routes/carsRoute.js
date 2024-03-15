const express = require("express");
const router = express.Router();
const Car = require("../models/carModel")

router.get("/getallcars",async(req,res) =>{
    console.log("I am in cars route")

    try {
        const cars = await Car.find({ })
        console.log(cars)
        res.send(cars)
    } catch(error){
        return res.status(400).json(error)
    }
})

module.exports = router;