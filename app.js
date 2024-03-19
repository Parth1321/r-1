require("dotenv").config({path:"./.env"})
const express = require ("express");
const app = express();

const PORT = process.env.PORT;


// const dotenv = require ("dotenv");
// dotenv.config({path:"./.env"});


app.listen(PORT, ()=>{
    console.log(`The server is running in port ${PORT}`);
})