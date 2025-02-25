import React, { useEffect, useState } from "react";
import "../Page.css";
import axios from "axios";
const API_URL = "https://notes-app-opal-tau.vercel.app";
function Update_notes({ closePopup, refreshNotes ,note_text_one_note,note_id }) {
    const [note_text, setNoteText] = useState(note_text_one_note);

    const handleSubmit = () => {
        const currentDate = new Date().toLocaleString();
        axios.put(`${API_URL}/api/notes/updatenote/${note_id}`,{note_text,date:currentDate})
        .then(result=>{
            if(result.data.msg === "note_updated"){
                alert(`Updated Note : ${note_text}`);
                refreshNotes();
                closePopup();
            }else{
                alert("Note note updated");
            }

        })
        .catch(err=>{
            alert(err);
        })


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

export default Update_notes