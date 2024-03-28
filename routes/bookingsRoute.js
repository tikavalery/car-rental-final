const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel")


router.post("/bookcar",async(req,res) =>{

    req.body.transactionId = "1234"
    try {
        console.log(req.body)
        const newbooking = new Booking(req.body)
        await newbooking.save()

        //  Car.update(
        //     { _id: req.body.car}, 
        //     { $push: { bookedTimeSlots: req.body.bookedTimeSlots} }
        // );

        // const res = await Person.updateOne({ name: 'Jean-Luc Picard' }, { ship: 'USS Enterprise' });
       const res2 = await Car.updateOne({ _id: req.body.car},{ $push: { bookedTimeSlots: req.body.bookedTimeSlots} }
 );
        // const car = await Car.findOne({_id : req.body.car})
        // console.log(car)
        // car.bookedTimeSlots.push(req.body.bookedTimeSlots)
        // console.log(car)
    //     await car.save()
    //    console.log(car)
        res.send("Your booking is successfull")
    } catch(error){
        return res.status(400).json(error);
    }
})

module.exports = router;