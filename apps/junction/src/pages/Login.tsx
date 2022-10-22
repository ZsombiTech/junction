import React from 'react';
import '../assets/style/login.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div>
      <h1 className="loginTitle">Budget Buddy</h1>
      <div className="spacebottom">
        <h1 className="inputLabel">User ID</h1>
        <input className="inputBox" type="search" placeholder="Type here" />
      </div>
      <div className="loginbtncontainer">
        <Link to="/home">
          <button className="loginbluebtn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
