const express = require("express");
const router = express.Router();
const Car = require("../models/carModel")

router.get("/getallcars",async(req,res) =>{
    console.log("I am in cars route")

    try {
        const cars = await Car.find({ })
      
        res.send(cars)
    } catch(error){
        return res.status(400).json(error)
    }
})

router.post("/addcar", async(req,res) =>{
    console.log("I am in addcar back end")
    // console.log(req.body)
    try{
        const newcar = new Car(req.body);
        console.log(newcar)
        await newcar.save()
        res.send("Car added successfully")

    } catch(error){
        return res.status(400).json(error)
    }
})

module.exports = router;