import React, { useEffect, useState } from "react";
import "./Page.css";
import axios from "axios";

function Notes({ closePopup ,div_colour }) {
  const [note_text, setNoteText] = useState("");
  const [user_email_id,setEmail] = useState(sessionStorage.getItem("logged_in_email") || "user_not_login");
  // const [div_color,SetDivColor]=useState(div_colour.div_color);
  const div_color = div_colour.div_color;
  const [date,setDate]=useState(new Date().toLocaleString());
  useEffect(()=>{
    const handleStroageChange=()=>{
      setEmail(sessionStorage.getItem("logged_in_email") || "user_not_login");
    }
// Set initial date when component mounts
setDate(new Date().toLocaleString());

    // SetDivColor(div_colour.div_color);
    window.addEventListener("storage",handleStroageChange);
    return ()=>{
      window.removeEventListener("storage",handleStroageChange);
    };


  },[]);

  
  const handleSubmit = () => {

    const currentDate = new Date().toLocaleString();
    // setDate(currentDate);
   
    axios.post("http://localhost:3000/api/notes/addnotes",{user_email_id,note_text,div_color,date:currentDate})
    .then(result=>{
      if(result.data.msg === "success_added_note"){
      alert(`Input Submitted: ${note_text}`);
      closePopup(); // Close pop-up after submission
      }else{
        alert(`Input not Submitted: have some problem`);
        closePopup(); 
      }
    })
    .catch(err=>{
      alert(`Input not Submitted: ${err}`);
      closePopup();
    });
  
    
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md _index_z">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-3">Enter Your Note</h2>
        <input
          type="text"
          value={note_text}
          onChange={(e) => setNoteText(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Type your note..."
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={closePopup}
            className="px-4 py-2 bg-gray-300 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notes;
