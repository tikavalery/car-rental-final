const express = require("express");
const router = express.Router();
const Booking = require("../models/carModel");


router.post("/bookcar",async(req,res) =>{
    res.body.transactionId = "1234"
    try {
        const newbooking = new Booking(req.body)
        await newbooking.save()
        res.send("Your booking is successfull")
    } catch(error){
        return res.status(400).json(error);
    }
})

module.exports = router;