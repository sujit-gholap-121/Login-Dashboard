import { useEffect, useState } from "react";
import { auth, GoogleAuth } from "../../ConfigFirebase/config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";
import "./index.css";
import Dashboard from "../Dashboard";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const LoginWithEmail = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, username, password);
  };

  const LoginWithGoogle = async () => {
    try {
      const res=await signInWithPopup(auth, GoogleAuth);
      res.then(res=>{
        navigate("/dashboard")
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="left">
        <h1 className="left-head">Board.</h1>
      </div>
      <div className="right">
        <div className="login-box">
            <h1 className="head-1">Sign In</h1>
            <p className="para-1">Sign in to your account</p>
          <button className="google-btn" type="button" onClick={LoginWithGoogle}>
            <img className="google-logo" src="google-icon-1.png" />
            Login with Google
          </button>
          <form onSubmit={LoginWithEmail} className="log-form">
            <div className="box">
              <label className="labels" htmlFor="email">Email address</label>
              <br/>
              <input className="input-box"
                type="text"
                id="email"
                placeholder="Email Address "
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="box">
              <label className="labels" htmlFor="pass">Password</label>
              <br />
              <input
              className="input-box"
                type="password"
                id="pass"
                placeholder="Password "
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="forgot">
              <Link to="">Forgot Password?</Link>
            </div>
              <button className="submit-btn" type="submit">Login</button>
        
          </form>
          <div className="register">
             <p>
              Don't have account?
              <span className="register-link"><Link to="">Register Here</Link></span>
              
            </p>
        
          </div>
         </div>
      </div>
    </div>
  );
};

export default Login;
