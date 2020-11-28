import React,{useState , useEffect} from 'react';
import './setCategory.css';
import logo from '../../imgs/p4.png'
import imgButton from '../../imgs/p7.png'
import api from '../../services/api'
export default function SetCategory(props) {
  const [username, setUsername] = useState('');
  const setAviso = props.aviso
  
  async function handleSubmit(e){
    e.preventDefault();
    if((username === '')){
      setAviso('')
    }else {
      setAviso('categoria '+ username + ' cadastrada')
      const category = {
        "name" : username
      }
      const response = await api.post('category/post', category);
      console.log(response.data.message)
    }
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
          required
          />
        <button data-testid="form-btn" type='submit' > <img className="imgButton" src={imgButton} /> <p className='nameButton'>OK</p></button>
      </form>
    </div>
  );
}