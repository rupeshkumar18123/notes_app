import React, { useState } from 'react'
import "./Page.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

function Register() {
   const [name,setName] = useState();
   const [email,setEmail]=useState();
   const [password,setPassword]=useState();
   const [con_password,SetConPassword]=useState();
   const navigate = useNavigate();

   const handle_submit = ()=>{
       axios.post("http://localhost:3000/api/register",{name,email,password})
       .then((result)=>{ 
        if(result.data.msg === "success"){
          console.log(result);
          alert("user registered successfully");
          navigate("/login");
        }else{
          alert("email id is already registered ,try with unique email id");
        }
       
      })
       .catch(err=>console.log(err));
   }

  return (
    <div className='login_form'>
      <div className='main_form_register' >
        <h1 className='main_form_h1'>Register</h1>
        <input type="text" id='name_register' placeholder="Full name" name="text" className="input" onChange={e=>setName(e.target.value)}/>
        
        <input type="text" id='email_register' placeholder="Email" name="text" className="input"  onChange={(e)=>setEmail(e.target.value)} />

        <input type="password" id='password_register' placeholder="Password" name="text" className="input" onChange={e=>setPassword(e.target.value)} />
       
        <input type="password" id='password_register_confirm' placeholder="Confirm Password" name="text" className="input" onChange={e=>SetConPassword(e.target.value)} />


        <label className="material-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          i agree all terms and conditions
        </label>
        <button onClick={handle_submit}>Submit</button>
        <p className="signin">Already have an acount ? <Link to="/login" className='link_deco'>Signin</Link> </p>
      </div>
    </div>
  )
}

export default Register
