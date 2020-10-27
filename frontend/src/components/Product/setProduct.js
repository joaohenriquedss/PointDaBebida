import React, { useState } from 'react';
import logo from '../../imgs/p4.png'
import imgButton from '../../imgs/p7.png'
import './setProduct.css';

export default function SetCategory(props) {
  const [username, setUsername] = useState('');
  const setAviso = props.aviso

  function handleSubmit(e) {
    e.preventDefault();
    if ((username === '')) {
      setAviso('')
    } else {
      setAviso('produto ' + username + ' cadastrada')
    }
    //Se cadastrou categoria retorna categoria cadastrada
    //Se não retorna categoria naoa cadastrada
  }
  return (
    <div className="product-container" >
      <form onSubmit={handleSubmit}>
        <img className="logo" src={logo} alt="Point" />
        <input
          className='inputNameProduct'
          placeholder='Nome do Produto'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          className='inputCategoryProduct'
          type="text"
          placeholder='Categoria do Produto'
          required
        />
        <input
           className='inputPrecoProduct'
          type="float"
          placeholder='Preço do Produto'
          required
        />
        <input
          className='inputFileProduct'
          type="file"
          placeholder='Imagem do Produto'
          required
          
        />
        <button data-testid="form-btn" type='submit' > <img className="imgButton" src={imgButton} /> <p className='nameButtonProduct'>OK</p></button>
      </form>
    </div>
  );
}