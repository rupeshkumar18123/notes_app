
import React from 'react'
import "./Page.css"
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='login_form'>
      <div className='main_form' >
        <h1 className='main_form_h1'>Login</h1>

        <input type="text" id='email_login' placeholder="email" name="text" className="input" />

        <input type="password" id='password_login' placeholder="password" name="text" className="input" />
       
        <label className="material-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Remember me
        </label>
        <button>Submit</button>
        <p className="signin">No account | <Link to="/register" className='link_deco'>Sign up</Link> </p>
      </div>
    </div>
  )
}

export default Login