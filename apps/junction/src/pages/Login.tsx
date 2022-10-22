import React, { useState } from 'react';
import '../assets/style/login.css';
import axios from 'axios';

export const Login = () => {
  const [userId, setUserId] = useState('');

  const login = async () => {
    if (userId.length > 0) {
      const response = await axios.get(`api/user/${userId}`);
      if (response.data && response.data.length > 0) {
        window.location.href = '/home';
      } else {
        alert('User not found');
      }
    } else {
      alert('Please enter a valid user ID');
    }
  };

  return (
    <div>
      <h1 className="loginTitle">Budget Buddy</h1>
      <div className="spacebottom">
        <h1 className="inputLabel">User ID</h1>
        <input
          className="inputBox"
          type="search"
          placeholder="Type here"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div className="loginbtncontainer">
        <button className="loginbluebtn" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
