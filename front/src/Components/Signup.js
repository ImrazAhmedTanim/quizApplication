import React, { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import { useAuth } from './AuthContext';
import axios from 'axios'; // Import Axios


export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });
  const navigate = useNavigate();
  const { handleAuthInfo,isLoggedIn } = useAuth();  // Ensure you're using the correct context values

  


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
   

    const newValue = type === 'checkbox' ? checked : value;
  // If the input being changed is either 'password' or 'confirmPassword',
  // compare the values to check if they match
  if (name === 'password' || name === 'confirmPassword') {
    const otherField = name === 'password' ? 'confirmPassword' : 'password';
    const passwordMatch = newValue === formData[otherField];
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
      passwordMatch: passwordMatch,
    }));
  } else {
    // For other fields, simply update the form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  }
   
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword, agreedToTerms } = formData;
 // Check if password and confirmPassword match
if (!formData.passwordMatch) {
  window.alert('Password and Confirm Password do not match.');
  return; // Prevent further execution
};
  
try {
  const response = await axios.post('https://quiztanim.onrender.com/quiz/api/signup', formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    // Successfully sent data to the server
    window.alert('REGISTRATION SUCCESSFUL');
    console.log('Data sent successfully');
    handleAuthInfo();

    navigate('/');
  } else {
    window.alert('INVALID REGISTRATION');
    console.error('Error sending data to the server');
  }
} catch (error) {
  console.error('An error occurred:', error);
}
};

  return (
    <div>  <main className="main">
    <div className="container">
      <h1>Create an account</h1>
      <div className="column">
        <div className="illustration">
          <img src="./images/signup.svg" alt="Signup" />
        </div>
        <form className="signup form" onSubmit={handleSubmit}>          
        <div className="textInput">
            <input type="text" name="name" id="name" placeholder="Enter name" value={formData.name} onChange={handleInputChange}/>
            <span className="material-icons-outlined"> person </span>
          </div>

          <div className="textInput">
            <input type="text" name="email" id="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange}/>
            <span className="material-icons-outlined"> alternate_email </span>
          </div>

          <div className="textInput">
            <input type="password" name="password" id="password" placeholder="Enter password" value={formData.password} onChange={handleInputChange}/>
            <span className="material-icons-outlined"> lock </span>
          </div>

          <div className="textInput">
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleInputChange}/>
            <span className="material-icons-outlined"> lock_clock </span>
          </div>

          <label>
          <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleInputChange} />
            <span>I agree to the Terms & Conditions</span>
          </label>

          <button type="submit" className="button">
          Submit now
          </button>


          <div className="info">
            Already have an account? <Link to="/Login">Login</Link> instead.
          </div>
        </form>
      </div>
    </div>
  </main></div>
  )
}
