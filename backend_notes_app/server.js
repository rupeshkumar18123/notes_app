
const express = require("express");
const mongoose =require("mongoose");
const cors = require("cors");
const userRoutes = require("./src/routes/authRoutes");
const notesRouter  =require("./src/routes/noteRoutes");
require("./src/config/db");

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api",userRoutes);
app.use("/api/notes",notesRouter);

app.get("/",(req,resp)=>{
 resp.send("this is server page for backend of Notes app");
});

// app.listen(3000,()=>{
//     console.log("server started at port number : 3000");
// })

// Set up server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

module.exports = app;