
import React, { useState, useEffect } from 'react'
import "./HeadFoot.css"
import { VscAccount } from "react-icons/vsc";
import { MdOutlineEventNote } from "react-icons/md";


function Header() {
 

  const [email, setEmail] = useState(sessionStorage.getItem("logged_in_email") || "Login");

  const handleStroageChange = () => {
    setEmail(sessionStorage.getItem("logged_in_email") || "not set");
  }
  // useEffect(()=>{
  //   handleStroageChange();
  // },[]);
  useEffect(() => {
    window.addEventListener("storage", handleStroageChange);
    return () => {
      window.removeEventListener("storage", handleStroageChange);
    };


  }, []);
  return (
    <div className='head'>
      <h1 className='headname'> <MdOutlineEventNote /> NotesApp</h1>
      <div className='user_head'>
        <h2 className='username_display'>{email}</h2>
        <div className='icon_expand'>
          <VscAccount />
        </div>
      </div>

    </div>
  )
}

export default Header