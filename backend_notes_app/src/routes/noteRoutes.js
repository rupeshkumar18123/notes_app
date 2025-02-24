 const express = require("express");
 const Notes = require("../models/Note");
  const User = require("../models/User")
 const router = express.Router();
const cors = require("cors");
router.use(express.json());
router.use(cors());
 router.post("/addnotes",async (req,resp)=>{
    //  const {user_email_id,note_text,div_color,date} = await req.body;
     
    Notes.create(req.body)
    .then(result=> resp.json({msg:"success_added_note",result}))
    .catch(err=>resp.json(err));
 });

 router.post("/retrivenotes",(req,resp)=>{
   const {user_email_id} = req.body;
     Notes.find({user_email_id:user_email_id})
     .then(result=>{
      resp.send(result)
     })
     .catch(err=>resp.send(err));
 })
 module.exports = router;
