import React from 'react';
import { useState } from 'react';
import "./clickable.css"

export default function Clickable() {

  const [popup, setPopup] = useState(false);
  
  const patimakumpiou = () => { setPopup(!popup);};
  
  return (<>
    <button onClick={patimakumpiou}>
        ↓
    </button>
    {popup && (
    <div className="modal">
        <div
        onClick={patimakumpiou} className="overlay"></div>
        <div className="modal-content">
            <h2>Filters</h2>
            <p>Now you can choose ur own filters</p>
        
        <button className='close-modal' onClick={patimakumpiou}>
        Close
        </button>
        </div>
    </div>)}
  </>
  );
}