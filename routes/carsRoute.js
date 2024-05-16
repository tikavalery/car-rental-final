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

router.post("/editcar", async(req,res) =>{
    try{
      const car = await Car.findOne({_id: req.body._id})
      car.name = req.body.name
      car.image = req.body.image
      car.feulType  = req.body.feulType
      car.rentPerHour = req.body.rentPerHour
      car.capacity = req.body.capacity

      await car.save()
      res.send("Car edited successfully")
    }catch{

    }
})

router.post("/deletecar", async(req,res) =>{
    try{
        await Car.findOneAndDelete({_id:req.body.carid});
        res.send("Car deleted Successfully");
    }catch(error){
        return res.status(400).json(error)
    }
})


module.exports = router;