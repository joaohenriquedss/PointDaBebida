import React, {useState} from 'react';
import './Login.css'
import logo from '../imgs/p4.png'
import imgButton from '../imgs/p7.png'
import Header from '../components/Header/index'
import Footer from '../components/Footer/footer'
import Menuleft from '../components/Menu/Menuleft'

export default function Category(props) {
  const [username, setUsername] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    //Se cadastrou categoria retorna categoria cadastrada
    //Se não retorna categoria nao cadastrada
    props.history.push('/main')
  }
  
  return (
    [<Header />,
      <Menuleft/>,
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
    </div>,
    <Footer />]

  );
}

