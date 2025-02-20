import React from 'react'
import "./Page.css"
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='login_form'>
      <div className='main_form_register' >
        <h1 className='main_form_h1'>Register</h1>
        <input type="text" id='name_register' placeholder="Full name" name="text" className="input" />
        
        <input type="text" id='email_register' placeholder="Email" name="text" className="input" />

        <input type="password" id='password_register' placeholder="Password" name="text" className="input" />
       
        <input type="password" id='password_register_confirm' placeholder="Confirm Password" name="text" className="input" />


        <label class="material-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          i agree all terms and conditions
        </label>
        <button>Submit</button>
        <p className="signin">Already have an acount ? <Link to="/login" className='link_deco'>Signin</Link> </p>
      </div>
    </div>
  )
}

export default Register
