 const express = require("express");
 const Notes = require("../models/Note");
  const User = require("../models/User")
 const router = express.Router();

 router.post("/addnotes",async (req,resp)=>{
    //  const {user_email_id,note_text,div_color,date} = await req.body;
     
    Notes.create(req.body)
    .then(result=> resp.json({msg:"success_added_note",result}))
    .catch(err=>resp.json(err));


 });

 module.exports = router;
