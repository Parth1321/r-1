require("dotenv").config({path:"./.env"})
const express = require ("express");
const app = express();
const PORT = process.env.PORT;

// require('./models/dbconfigs').dbconnection()
const userRouter = require("./routes/userRoute");

//logger
app.use(require("morgan")("dev"));


//body pasrser ye dono line route ke upr likhni hogi
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api/user", userRouter)

app.all("*", (req, res, next)=>{
    res.status(404).json({
        success: false,
        message: `${req.url} route not found`
    });
});



app.listen(PORT, ()=>{
    console.log(`The server is running in port ${PORT}`);
})