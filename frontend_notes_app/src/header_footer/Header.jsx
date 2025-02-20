
import React from 'react'
import "./HeadFoot.css"
import { VscAccount } from "react-icons/vsc";
import { MdOutlineEventNote } from "react-icons/md";


function Header() {
  return (
    <div className='head'>
        <h1 className='headname'> <MdOutlineEventNote /> NotesApp</h1>
        <div className='user_head'>
          <h2 className='username_display'>username</h2>
        <div className='icon_expand'>
        <VscAccount />
        </div>
        </div>
       
    </div>
  )
}

export default Header