 import React from 'react'
 import "./Component.css"
 import { FaPen } from "react-icons/fa";
 function NoteItem({demo_text}) {
   return (
    

    <div className="noteitem noteitem_color" style={{background:demo_text.div_color}}>
      <p className="note_text">
       {demo_text.text_note} 
      </p>
      <p className="date_span">May 21, 2020</p>
      <div className="edit_icon">
        <FaPen />
      </div>
    </div>
   )
 }
 
 export default NoteItem
