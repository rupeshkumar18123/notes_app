
import React, { useState ,useEffect} from 'react'
import "./Page.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
 

  useEffect(() => {
    // If user is already logged in, redirect them
    if (sessionStorage.getItem("logged_in_email")) {
      navigate("/"); // Redirect to home page
    }
  }, [navigate]);
  const handle_login = () => {

    setErrorMsg(""); //  Reset error message before validation

    //  Field validation (All fields are required)
    if (!email || !password) {
      setErrorMsg("Email and password are required.");
      return;
    }

    // Email format validation (Basic check)
    if (!email.includes("@") || !email.includes(".")) {
      setErrorMsg("Enter a valid email address.");
      return;
    } 
    
    axios.post("http://localhost:3000/api/login", { email, password })
      .then(result => {
        if (result.data.msg === "successful_login") {
          alert("successful_login");
          saveEmail();
          navigate("/notelist");
        }
        else if (result.data.msg === "no_user_found") {
          alert("user id or password is worng");
        }
        else {
          alert(result.data.msg);
        }
      })
      .catch(err => console.log(err));
  }
//save email using session for use in differnt differnt component
 const saveEmail = ()=>{
      sessionStorage.setItem("logged_in_email",email);
      window.dispatchEvent(new Event("storage"));
 }


  return (
    <div className='login_form'>
      <div className='main_form' >
        <h1 className='main_form_h1'>Login</h1>

        <input type="text" id='email_login' placeholder="email" name="text" className="input" onChange={e => setEmail(e.target.value)} />

        <input type="password" id='password_login' placeholder="password" name="text" className="input" onChange={e => setPassword(e.target.value)} />

        <label className="material-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Remember me
        </label>
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
        <button onClick={handle_login}>Submit</button>
        <p className="signin">No account | <Link to="/register" className='link_deco'>Sign up</Link> </p>
      </div>
    </div>
  )
}

export default Login