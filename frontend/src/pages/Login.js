import React from 'react';
import './Login.css'
import logo from '../imgs/p4.png'
import imgButton from '../imgs/p7.png'
export default function Login() {
  return (
    <div className="login-container" >
      <form>
        <img className="logo" src={logo} alt="Point" />
        <input placeholder='Digite seu nome de ADM'/>
        
        <button type='submit' > <img className="imgButton" src={imgButton} /> <p className='nameButton'>OK</p></button>
      </form>

    </div>

  );
}

