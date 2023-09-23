import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Signup from "./Components/Signup";
import Nav from './Components/Nav';
import Login from './Components/Login';
import Quiz from './Components/Quiz';


function App() {
  return (
    
    <Router>
      <>
    <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Quiz" element={<Quiz />} />

      <Route path="/Signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

     


      </Routes>
    
    </>
    </Router>
  );
}

export default App;
