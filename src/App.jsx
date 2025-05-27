import { useState } from 'react'
import './App.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './Login';
import HomePage from './home'; // ✅ Import HomePage
// import Signup from './signup'; // ✅ Import Signup
// import "./SignupForm.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Import routing tools


const App = () => (
  <GoogleOAuthProvider clientId="279136439919-v4hrnqqvqfol2ufpe51g5da6po7el5hf.apps.googleusercontent.com">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />         {/* ✅ Login route */}
        <Route path="/home" element={<HomePage />} />  {/* ✅ Home route */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  </GoogleOAuthProvider>
);

export default App