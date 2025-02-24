const express = require("express");
const User = require("../models/User");

const router = express.Router();


router.post("/register",(req,resp)=>{
    User.create(req.body)
    .then(result => resp.json({msg:"success",result}))
    .catch(err=>resp.json(err));
  
  });
  
  

router.post("/login",(req,resp)=>{
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

  module.exports = router;
