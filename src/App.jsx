import { useState } from 'react'
import './App.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './Login';
import HomePage from './home'; // ✅ Import HomePage
// import Signup from './signup'; // ✅ Import Signup
// import "./SignupForm.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Import routing tools


const App = () => (
  <GoogleOAuthProvider clientId="google-client-ID">
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
