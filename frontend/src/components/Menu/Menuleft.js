import React from 'react';
import './Menuleft.css';
import home from '../../imgs/home.png'

export default function Menuleft(props) {
  return (
    <div className='menuleft-container'>
      <div className='menuleft-content'>
        <div className="sidenav">
          <div>
            
            <a href="/main" > Inicio</a>
          </div>
          <a href="/category">Categoria</a>
          <a href="/product">Produto</a>
        </div>
      </div>
    </div>
  );
}