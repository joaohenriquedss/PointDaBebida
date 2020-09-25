import React from 'react';
import './Menuleft.css';
import imgButton from '../../imgs/p7.png'

export default function Menuleft() {
  return (
    <div className='menuleft-container'>
      <div className='menuleft-content'>
        <div class="sidenav">
          <a href="#editar" >Editar</a>
          <a href="#cadastrar">Cadastrar</a>
        </div>
      </div>
    </div>
  );
}