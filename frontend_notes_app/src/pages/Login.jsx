
import React, { useState } from 'react'
import "./Page.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
function Login() {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
const navigate = useNavigate();
  const handle_login= ()=>{
    axios.post("http://localhost:3000/api/login",{email,password})
    .then(result=>{
      if(result.data.msg === "successful_login"){
        alert("successful_login");
        navigate("/notelist");
      }
      else if(result.data.msg === "no_user_found"){
        alert("user id or password is worng");
      }
      else{
        alert(result.data.msg);
      }
    })
    .catch(err=>console.log(err));
  }

  return (
    <div className='login_form'>
      <div className='main_form' >
        <h1 className='main_form_h1'>Login</h1>

        <input type="text" id='email_login' placeholder="email" name="text" className="input" onChange={e=>setEmail(e.target.value)}/>

        <input type="password" id='password_login' placeholder="password" name="text" className="input" onChange={e=>setPassword(e.target.value)} />
       
        <label className="material-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Remember me
        </label>
        <button onClick={handle_login}>Submit</button>
        <p className="signin">No account | <Link to="/register" className='link_deco'>Sign up</Link> </p>
      </div>
    </div>
  )
}

export default Login