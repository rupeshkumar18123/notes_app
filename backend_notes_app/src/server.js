// const express = require("express");
// require("./config/db");
// const User = require("./models/User");
// const { stringify } = require("querystring");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// // app.use(express.json());
// app.use(bodyParser.json());
// app.use(cors());

// app.post('/addUser', async (req, res) => {
//     const user = new User(req.body);
//     const result = await user.save();
//     res.json(result);
// });

// const insertData  = async ()=>{
//     const newUser = new User({
//         name :"Rupesh singh",
//         email:"rupesh18123@gmail.com",
//         password:"234567asdfg"
//     });
//     const result = await newUser.save();
//     console.log("data added succesfully",result);
    
// }

// insertData();

// app.get('/users', async (req, res) => {
//     const users = await User.find();
//     res.json(users);
// });


const express = require("express");
const mongoose =require("mongoose");
require("./config/db");
const User = require("./models/User");
// const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


app.post("/register",(req,resp)=>{
  User.create(req.body)
  .then(result => resp.json({msg:"success",result}))
  .catch(err=>resp.json(err));

});


app.post("/login",(req,resp)=>{
  const {email,password} = req.body;
  User.findOne({email:email})
  .then(user=>{
    if(user){
        if(user.password === password){
            resp.json({msg:"successful_login"});
        }
    }
    else{
        resp.json({msg:"no_user_found"});

    }
  })
  .catch(err=>{
      console.log(err);
  });
});

app.get("/about",(req,resp)=>{
 resp.send("this is server page");
});

app.listen(3000,()=>{
    console.log("server started at port number : 3000");
})