 import React, { useState } from 'react'
 import "./Component.css"
 import { FaPen } from "react-icons/fa";
import Update_notes from '../pages/update/Update_notes';
import { MdDelete } from "react-icons/md";
 function NoteItem({demo_text,refreshNotes}) {
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
 
   return (
    

    <div className="noteitem noteitem_color" style={{background:demo_text.div_color}}>
      <p className="note_text">
       {demo_text.note_text} 
      </p>
      <p className="date_span">{demo_text.date}</p>
      <div className="edit_icon" onClick={() => setShowUpdatePopup(true)}>
        <FaPen />
      </div>
      <div className="edit_icon_delete" onClick={() => setShowUpdatePopup(true)}>
      <MdDelete />
      </div>

      {showUpdatePopup && (
        <Update_notes 
          closePopup={() => setShowUpdatePopup(false)} 
          refreshNotes={refreshNotes} 
          note_id={demo_text._id}
          note_text_one_note={demo_text.note_text}
        />
      )}

    </div>
   )
 }
 
 export default NoteItem
