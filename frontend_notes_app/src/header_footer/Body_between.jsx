import React, { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Note_animation from "../assets/Note_animation.lottie?url"
import "./HeadFoot.css"
import { Link, useNavigate } from 'react-router-dom';

function Body_between() {
  const [isdis,setIsDis] =useState(false);
    const navigate=useNavigate()
    const handle_login=()=>{
        navigate("/login");
    }
    
    const handle_looged_in=()=>{
      if(sessionStorage.getItem("logged_in_email")){
           setIsDis(true);
      }
    }
    useEffect(handle_looged_in,[isdis]);

    const handle_logout=()=>{
      sessionStorage.removeItem("logged_in_email");
      setIsDis(false);
      alert("log out successful");
     
    }




  return (
  <div className='main_body_landing'>
    <DotLottieReact
      src={Note_animation}
       loop
      autoplay
      className='lottie_aimation'
    />
    <h1>Transform your routine. Start now</h1>
  

  <button onClick={handle_login} disabled={isdis} >Login</button>
  <Link to={"/register"}>
  <button disabled={isdis}>Register</button>
  </Link>
{
  isdis?<>
  <Link to={"/notelist"}><button >Note list</button></Link>    
  <button onClick={handle_logout}>log out</button>
  </>
    : ""
}
  </div>
  )
}

export default Body_between