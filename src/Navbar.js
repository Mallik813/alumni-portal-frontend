import React, { useState } from 'react';
import './styles/Navbar.css';

function Navbar() {
  const[size, setSize] = useState('large')     
  return(
  <div className="Navbar">
    <div>
      Atal Bihari Vajpayee Indian Institute of Information
      Technology and Management Gwalior Alumni Portal
    </div>
  </div>
  )
}
export default Navbar;