 const mongoose = require("mongoose");

 const notesSchema = new mongoose.Schema({
    user_email_id:{type: String , required: true},
    note_text:{type: String, required: true},
    div_color:{type: String, required:true},
    date:{type: String , required:true}
 });

 const Note = mongoose.model("Notes",notesSchema);

 module.exports = Note;
