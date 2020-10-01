import React from 'react';
import './header.css';
import logo from '../../imgs/p4.png'

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <img className="logo" src={logo} alt="Point" />
      </div>
    </div>
  );
}