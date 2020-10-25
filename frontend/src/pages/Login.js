import React, {useState} from 'react';
import './Login.css'
import logo from '../imgs/p4.png'
import imgButton from '../imgs/p7.png'

export default function Login(props) {
  const [username, setUsername] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    props.history.push('/main')
  }
  
  return (
    <div className="login-container" >
      <form onSubmit={handleSubmit}>
        <img className="logo" src={logo} alt="Point" />
        <input 
          placeholder='Digite seu nome'
          value={username}
          onChange={e =>setUsername(e.target.value)}
          />
        <input type="password" placeholder='Digite sua senha' />
        <button type='submit' > <img className="imgButton" src={imgButton} /> <p className='nameButtonLogin'>LOGIN</p></button>
      </form>

    </div>

  );
}

