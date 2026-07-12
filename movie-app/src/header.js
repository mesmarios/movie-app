import "./App.css";
import Search from "./search";
import React from 'react';
import "./Header.css";
import Clickable from "./clickable";





export default function App() {
  return (
  <header className='header'>
  <spam>
  <h1 className="logo">Movie App</h1>
  <Clickable/>
  </spam>

  <nav className="navbar">
    <Search/>
  
  
  </nav>
  </header>
  
    
  );
}

