const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose")
const dbConnection = require('./db');
app.use(express.json())



app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));

const path = require("path")

if(process.env.NODE_ENV === "production")
    {
        app.use("/", express.static("client/build"))
        app.get("*", (req,res) => {
            res.sendFile(path.resolve(__dirname,"client/build/index.html"))
        })
    }


app.get("/", (req, res) => res.send("Hello World"))
app.listen(port, () => console.log(`Node js server started in port ${port}`))