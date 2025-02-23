 const mongoose = require("mongoose");
 require("dotenv").config();

 const uri = process.env.MONGO_URI;

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("mongodb atlas database is connected")})
.catch(err=>{console.log("error is occured, mongodb atlas is not connected",err)});

module.exports = mongoose;
