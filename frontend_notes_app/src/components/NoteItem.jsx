 import React from 'react'
 import "./Component.css"
 import { FaPen } from "react-icons/fa";
 function NoteItem({demo_text}) {
   return (
    

    <div className="noteitem noteitem_color" style={{background:demo_text.div_color}}>
      <p className="note_text">
       {demo_text.note_text} 
      </p>
      <p className="date_span">{demo_text.date}</p>
      <div className="edit_icon">
        <FaPen />
      </div>
    </div>
   )
 }
 
 export default NoteItem
