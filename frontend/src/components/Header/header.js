import React,{createContext, useContext} from 'react';
import './header.css';
import logo from '../../imgs/p4.png'
import adminLogo from '../../imgs/admin.png'

export default function Header() {
  const userAdm = ''
  return (
    <div className='header-container'>
      <div className='header-content'>
        <img className="logo" src={logo} alt="Point" />
      </div>
      <div className='header-content-admin'>
        <img className="adminLogo" src={adminLogo} alt="Point" />
        <h1 className="nameADM" >123456</h1>
      </div>
    </div>
  );
}