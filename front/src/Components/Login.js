import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

import axios from 'axios'; // Import Axios


export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const { handleAuthInfo,isLoggedIn } = useAuth();  // Ensure you're using the correct context values


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Check if password and confirmPassword match
    // Implement this check here
    setLoading(true);
    try {
      const response = await axios.post('https://quiztanim.onrender.com/quiz/api/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
setLoading(false);
      if (response.status === 200) {
        // Successfully sent data to the server
        window.alert('LOGIN SUCCESSFUL');
        console.log('Data sent successfully');
        handleAuthInfo();

        navigate('/');
      } else {
        window.alert('INVALID LOGIN');
        console.error('Error sending data to the server');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  return (
    <div>
      <main className="main">
        {loading?(
           <div class="spinner-container">
           <div class="spinner"></div>
           <div class="text">Processing...</div>
          </div>
        ):(
        <div className="container">
          <h1>Login to your account</h1>
          <div className="column">
            <div className="illustration">
              <img src="./images/login.svg" alt="Login" />
            </div>
            <form className="login form" onSubmit={handleSubmit}>
              <div className="textInput">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <span className="material-icons-outlined"> alternate_email </span>
              </div>
    
              <div className="textInput">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <span className="material-icons-outlined"> lock </span>
              </div>
    
              <button className="button" type="submit">
                <span>Submit now</span>
              </button>
    
              <div className="info">
                Don't have an account? <Link to="/Signup">Signup</Link> instead.
              </div>
            </form>
          </div>
        </div>
        )}
      </main>
    </div>
  );
}
