import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Note_animation from "../assets/Note_animation.lottie?url"
import "./HeadFoot.css"
import { Link, useNavigate } from 'react-router-dom';

function Body_between() {
    const navigate=useNavigate()
    const handle_login=()=>{
        navigate("/login");
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
  

  <button onClick={handle_login} >Login</button>
  <Link to={"/register"}>
  <button>Register</button>
  </Link>

  </div>
  )
}

export default Body_between