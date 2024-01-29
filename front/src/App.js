import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Signup from "./Components/Signup";
import Nav from './Components/Nav';
import Login from './Components/Login';
import Quiz from './Components/Quiz';
import AuthInfo from './Components/AuthContext';


function App() {
  return (
    
    <Router>
      <>
      <AuthInfo>
    <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Quiz" element={<Quiz />} />

      <Route path="/Signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

     


      </Routes>
    </AuthInfo>
    </>
    </Router>
  );
}

export default App;
