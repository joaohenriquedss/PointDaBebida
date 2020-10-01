import React,{useState} from 'react';
import './setCategory.css';
import logo from '../../imgs/p4.png'
import imgButton from '../../imgs/p7.png'

export default function SetCategory(props) {
  const [username, setUsername] = useState('');
  const setAviso = props.aviso
  function handleSubmit(e){
    e.preventDefault();
    setAviso('categoria '+ username + ' cadastrada')

    //Se cadastrou categoria retorna categoria cadastrada
    //Se não retorna categoria nao cadastrada
  }
  return (
    <div className="login-container" >
      <form onSubmit={handleSubmit}>
        <img className="logo" src={logo} alt="Point" />
        <input 
          placeholder='Categoria do Produto'
          value={username}
          onChange={e =>setUsername(e.target.value)}
          />
        <button type='submit' > <img className="imgButton" src={imgButton} /> <p className='nameButton'>OK</p></button>
      </form>
    </div>
  );
}