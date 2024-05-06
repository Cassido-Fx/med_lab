import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/navbar/Navbar.js';
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <navbar/>
              <Routes>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  
  );
}

export default App;