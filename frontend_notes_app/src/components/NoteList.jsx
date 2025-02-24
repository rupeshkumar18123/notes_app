import React, { useEffect, useState } from 'react'
import "./Component.css"
import NoteItem from './NoteItem'
import Notes from '../pages/Notes';
import { FaPlus } from "react-icons/fa6";
import axios from 'axios';

function NoteList() {
  const [div_color_set, SetDivColor] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [user_email_id, setEmail] = useState(sessionStorage.getItem("logged_in_email") || "user_not_login");
  const [notes, setNotes] = useState([]); //  Store fetched notes
  // const arr = [
  //   { text_note: "this is demo text1", date: "May 21, 2020", id: 1, div_color: "#1A4D2E" },//3
  //   { text_note: "this is demo text2", date: "May 21, 2020", id: 2, div_color: "#3E3232" },//2
  //   { text_note: "this is demo text3", date: "May 21, 2020", id: 3, div_color: "#67fea6" },
  //   { text_note: "this is demo text4", date: "May 21, 2020", id: 4, div_color: "#01204E" },//1
  //   { text_note: "this is demo text5", date: "May 21, 2020", id: 5, div_color: "#fef667" },
  //   { text_note: "this is demo text6", date: "May 21, 2020", id: 6, div_color: "#32012F" },//4
  //   { text_note: "this is demo text7", date: "May 21, 2020", id: 7, div_color: "#A79277" },//5
  //   { text_note: "this is demo text8", date: "May 21, 2020", id: 8, div_color: "#fe6767" },
  //   { text_note: "this is demo text9", date: "May 21, 2020", id: 9, div_color: "#fe67c7" },
  //   { text_note: "this is demo text10", date: "May 21, 2020", id: 10, div_color: "#6cfe67" },
  //   { text_note: "this is demo text11", date: "May 21, 2020", id: 11, div_color: "#fe9467" },
  //   { text_note: "this is demo text12", date: "May 21, 2020", id: 12, div_color: "#fe67c7" },
  //   { text_note: "this is demo text13", date: "May 21, 2020", id: 13, div_color: "#fe9467" },
  //   { text_note: "this is demo text14", date: "May 21, 2020", id: 14, div_color: "#6cfe67" },

  // ]

  useEffect(() => {
    axios.post("http://localhost:3000/api/notes/retrivenotes", { user_email_id })
      .then(result => {
        console.log(result);
        setNotes(result.data);
      })
      .catch(err => console.log(err));
  }, [user_email_id]);

  return (
    <div className='flex_main'>
      <div className='flex'>
      {["#01204E", "#3E3232", "#1A4D2E", "#32012F", "#A79277"].map((color, index) => (
          <div key={index} className="edit_icon_1 margin_div" style={{ backgroundColor: color }}
            onClick={() => { setShowPopup(true); SetDivColor(color); }}>
            <FaPlus />
          </div>
        ))}
        {/* <div className="edit_icon_1 margin_div color_icon_1 " onClick={() => {
          setShowPopup(true)
          SetDivColor("#01204E");
        }}>
          <FaPlus />
        </div>

        <div className="edit_icon_1 margin_div  color_icon_2" onClick={() => {
          setShowPopup(true)
          SetDivColor("#3E3232");
        }}>
          <FaPlus />
        </div>

        <div className="edit_icon_1 margin_div  color_icon_3" onClick={() => {
          setShowPopup(true)
          SetDivColor("#1A4D2E");
        }}>
          <FaPlus />
        </div>
        <div className="edit_icon_1 margin_div  color_icon_4" onClick={() => {
          setShowPopup(true)
          SetDivColor("#32012F");
        }}>
          <FaPlus />
        </div>
        <div className="edit_icon_1 margin_div  color_icon_5" onClick={() => {
          setShowPopup(true)
          SetDivColor("#A79277");
        }}>
          <FaPlus />
        </div> */}

      </div>

      {/* Show the Notes pop-up when needed */}
      {showPopup && <Notes closePopup={() => setShowPopup(false)} div_colour={{ div_color: div_color_set }} />}
      <div className='noteList'>

        {/* {
        arr.map((demo)=>(
            <NoteItem key={demo.id} demo_text={demo}/>
        ))
       } */}

        {
          notes.length > 0 ? notes.map((note) => (
            <NoteItem key={note._id} demo_text={note} />
          )) : <p>No notes found</p>  //  Handle empty case
        }
      </div>
    </div>
  )
}

export default NoteList 
