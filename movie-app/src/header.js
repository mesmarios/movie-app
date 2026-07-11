import "./App.css";
import Search from "./search";
import React from 'react';
import "./Header.css";




function Clickable() {
  return <button>⮟</button>;
}
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

