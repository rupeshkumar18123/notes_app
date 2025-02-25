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
 });

// router.put("/updatenote/:id",(req,resp)=>{
//    const noteId = req.params.id;
//   Notes.findByIdAndUpdate( noteId,
//     { note_text, date },
//     { new: true } )
//   .then(result=>{
//     resp.json({msg:"note_updated",result});
//    })
//    .catch(err=>resp.json(err));
// });


router.put("/updatenote/:id", async (req, res) => {
  try {
    const { note_text, date } = req.body;
    const noteId = req.params.id;

    const updatedNote = await Notes.findByIdAndUpdate(
      noteId,
      { note_text, date },
      { new: true } 
    );

    if (!updatedNote) {
      return res.status(404).json({ msg: "Note not found" });
    }

    res.json({ msg: "note_updated", updatedNote });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


 module.exports = router;
