import React from 'react';
import './Menuleft.css';


export default function Menuleft() {
  return (
    <div className='menuleft-container'>
      <div className='menuleft-content'>
        <div class="sidenav">
          <a href="#editar" >Inicio</a>
          <a href="#cadastrar">Categoria</a>
          <a href="#cadastrar">Produto</a>
        </div>
      </div>
    </div>
  );
}