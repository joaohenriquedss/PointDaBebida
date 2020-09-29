import React from 'react';
import './Menuleft.css';


export default function Menuleft(props) {
  function handleSubmit(e){
    e.preventDefault();
    props.history.push('/main')
  }
  return (
    <div className='menuleft-container'>
      <div className='menuleft-content'>
        <div className="sidenav">
          <a href="/main">Inicio</a>
          <a href="/category">Categoria</a>
          <a href="/product">Produto</a>
        </div>
      </div>
    </div>
  );
}