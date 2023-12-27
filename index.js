 const express = require('express');    // import express
const { dbConnect } = require('./config/database');
    const app = express();                 // create express app    

    require('dotenv').config()

    const PORT = process.env.PORT || 3000;

    app.use(express.json())

    require('./config/database').dbConnect()

    const users = require("./routes/users")
      app.use("/api/v1",users)
   

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`) 
    }
     )

     app.get("/",(req,res)=>{
        res.send("Hello World")
     })