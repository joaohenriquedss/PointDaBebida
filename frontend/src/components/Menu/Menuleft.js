import React from 'react';
import './Menuleft.css';
import { Link } from 'react-router-dom'

export default function Menuleft(props) {
  return (
    <div className='menuleft-container'>
      <div className='menuleft-content'>
        <div className="sidenav">

          <a href="/main" > Inicio</a>
          <a href="/category">Categoria</a>
          <a href="/product">Produto</a>
          
        </div>
      </div>
    </div>
  );
}