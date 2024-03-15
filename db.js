const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect("mongodb+srv://tikavalery:IMLY1oe3L2BKti5m@cluster0.wexhtgu.mongodb.net/tikka-rentals",{useUnifiedTopology:true,useNewUrlParser:true})
    const connection = mongoose.connection
    connection.on("connected", ()=> {
        console.log("Mongo DB Connection Successfull")
    })
    connection.on("error",()=>{
        console.log("Mongo DB Connection Error")
    })
}

connectDB()

module.exports = mongoose