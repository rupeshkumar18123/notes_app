 const mongoose = require("mongoose");

//  const uri = "mongodb+srv://rupedhkhf:8KEZlHJN4E6Vwn4L@clusterrupesh.mdvbg.mongodb.net/notes_app";
// const uri ="mongodb+srv://rupedhkhf:8KEZlHJN4E6Vwn4L@clusterrupesh.mdvbg.mongodb.net/?retryWrites=true&w=majority&appName=ClusterRupesh"
const uri = "mongodb+srv://rupedhkhf:8KEZlHJN4E6Vwn4L@clusterrupesh.mdvbg.mongodb.net/notes_app?retryWrites=true&w=majority&appName=ClusterRupesh";

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("mongodb atlas database is connected")})
.catch(err=>{console.log("error is occured, mongodb atlas is not connected",err)});

module.exports = mongoose;
