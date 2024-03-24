const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// const {MONGOURI} = require("./key.js")
const mongoose = require("mongoose")
const dbConnection = require('./db');
app.use(express.json())



app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));



// mongoose.connect(MONGOURI);
// mongoose.connection.on("connected",()=>{
//     console.log("connected to mongo yeahh")
// })
// mongoose.connection.on("error",(err)=>{
//     console.log("Error connecting",err)
// })

app.get("/", (req, res) => res.send("Hello World"))
app.listen(port, () => console.log(`Node js server started in port ${port}`))