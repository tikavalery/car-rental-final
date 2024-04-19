const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel")
const stripe = require("stripe")("sk_test_51NovQALXB4fdf1TyG6VvOSCzPBNhv9MR0KmSRgk31AAPullpsqd5u2A5Rz8fUCxf2SmkIcYoWAEFbfWZA4L9ehOv00IoXlM4PG")
const { v4: uuidv4 } = require('uuid');

router.post("/bookcar",async(req,res) =>{
console.log("i am in book car route")

    const {token} = req.body
    
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email:token.email,
            line_items: [{
              price_data:{
                currency:"usd",
                product_data:{
                  name:token.email,

                },
                unit_amount:req.body.totalAmount,
              },
              quantity:100

            }],
            mode: 'payment',
            success_url: 'https://appwexdigital.com/',
            cancel_url: 'https://appwexdigital.com/',
          });

      if(session){
 
        req.body.transactionId = session.id
        const newbooking = new Booking(req.body)
        await newbooking.save()
       const res2 = await Car.updateOne({ _id: req.body.car},{ $push: { bookedTimeSlots: req.body.bookedTimeSlots} }
               );

        res.send("Your booking is successfull")
      }else{
        // return res.status(400).json(error);
      }
     
    } catch(error){
        // return res.status(400).json(error);
        console.log(error)
    }
})

router.get("/getallbookings",async (req,res) =>{
  console.log("i am in all all bookings")
  try{
    console.log("i am in all try try bookins")
         const booking = await Booking.find({})
         res.send(booking)
  } catch (error){
           return res.status(400).json(error);
  }
})

module.exports = router;