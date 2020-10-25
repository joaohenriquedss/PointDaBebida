import React,{useState} from 'react';
import './setCategory.css';
import logo from '../../imgs/p4.png'
import imgButton from '../../imgs/p7.png'

export default function SetCategory(props) {
  const [username, setUsername] = useState('');
  const setAviso = props.aviso
  
  function handleSubmit(e){
    e.preventDefault();
    if((username === '')){
      setAviso('')
    }else {
      setAviso('categoria '+ username + ' cadastrada')
    }
    //Se cadastrou categoria retorna categoria cadastrada
    //Se não retorna categoria naoa cadastrada
  }
  return (
    <div className="category-container" >
      <form onSubmit={handleSubmit}>
        <img className="logo" src={logo} alt="Point" />
        <input 
          data-testid="form-field"
          placeholder='Categoria do Produto'
          value={username}
          onChange={e =>setUsername(e.target.value)}
          />
        <button data-testid="form-btn" type='submit' > <img className="imgButton" src={imgButton} /> <p className='nameButton'>OK</p></button>
      </form>
    </div>
  );
}