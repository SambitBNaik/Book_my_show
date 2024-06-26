const express = require("express");
const app=express();
require('dotenv').config();
const dbConfig=require("./config/dbConfig");
const userRouter = require("./Routes/userRouter");
const movieRouter= require("./Routes/movieRouter");
const theatreRouter= require("./Routes/theatreRouter");
const bookingRouter = require("./Routes/bookingRouter");


console.log(dbConfig);
app.use(express.json());
app.use("/app/v1/users", userRouter);
app.use("/app/v1/users/admin",movieRouter);
app.use("/app/v1/users/theatres",theatreRouter);
app.use("/app/v1/users/bookings",bookingRouter);


app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is listining  to port ${process.env.PORT}`);
});