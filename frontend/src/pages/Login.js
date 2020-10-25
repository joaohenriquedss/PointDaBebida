import React, {useState, useContext} from 'react';
import './Login.css'
import logo from '../imgs/p4.png'
import imgButton from '../imgs/p7.png'
import StoreContext from '../components/Authentication/Context'
function login(user,password){
  if(user === 'admin' && password === 'admin'){
    return {token: '1234'}
  }
  return {error: 'Usuario ou senha incorreto'}
}

export default function Login(props) {
  
  const [userAdm, setAdm] = useState('');
  const [passwordAdm , setPassowordAdm] = useState('');
  const {setToken} = useContext(StoreContext)

  function handleSubmit(e){
    e.preventDefault();
    const {token,error} = login(userAdm,passwordAdm)
    if(token){
      setToken(token)
      props.history.push('/main')
    }else {
      alert(error)
    }
}
  
  return (
    <div className="login-container" >
      <form onSubmit={handleSubmit}>
        <img className="logo" src={logo} alt="Point" />
        <input 
          placeholder='Digite seu nome'
          value={userAdm}
          onChange={e =>setAdm(e.target.value)}
          required/>
        <input type="password" 
        placeholder='Digite sua senha' 
        value={passwordAdm}
        onChange={e =>setPassowordAdm(e.target.value)}
        required/>
        <button type='submit' > <img className="imgButton" src={imgButton}/> <p className='nameButtonLogin'>LOGIN</p></button>
      </form>
    </div>

  );
}

