const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post('/login',async(req,res)=>{
    const {username,password} = req.body
    try{
        const user = await User.findOne({username,password})
        if(user){
            res.send(user)

        }else{
            return res.status(400).json(error);

        }
    }catch(error){
        return res.status(400).json(error)
    }
})

router.post('/register',async(req,res)=>{
    console.log("I have entered server register")
    console.log(req.body)
    // const {username,password} = req.body
    try{
        const newuser = new User(req.body)
        console.log(newuser)
        await newuser.save()
         res.send("User registered suceesfully")
        // if(user){
        //     res.send(user)

        // }else{
        //     return res.status(400).json(error);
           
          
        // }
    }catch(error){
        return res.status(400).json(error)
    }
})

module.exports = router;