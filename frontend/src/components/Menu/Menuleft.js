import React from 'react';
import './Menuleft.css';
import iconHome from '../../imgs/home.png'
import { Link } from 'react-router-dom'

export default function Menuleft(props) {
  return (
    <div className='menuleft-container'>
      <div className='menuleft-content'>
        <div className="sidenav">
          <div className="icon_main">
            <a href="/main" > Inicio</a>
          </div>

          <a href="/category">Categoria</a>
          <a href="/product">Produto</a>

        </div>
      </div>
    </div>
  );
}