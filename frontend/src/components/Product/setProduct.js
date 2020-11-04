import React, { useState } from 'react';
import logo from '../../imgs/p4.png'
import imgButton from '../../imgs/p7.png'
import './setProduct.css';
import api from '../../services/api'
import ImageUploader from "react-images-upload";

export default function SetProduct(props) {
  const [username, setUsername] = useState('');
  const [usercategory, setPCategory] = useState('');
  const [useprice, setPrice] = useState('');
  const [useimg, setImg] = useState('');
  const setAviso = props.aviso

  async function handleSubmit(e) {
    e.preventDefault();
    if ((username === '') || (usercategory === '') || (useprice === '')) {
      setAviso('')
    } else {
      console.log(useimg)
      let formData = new FormData();
      formData.append("image_path", useimg , useimg.name);
      formData.append("name", username)
      formData.append("price",useprice)
      formData.append("category",usercategory)
      
      const response = await api.post('product/post',formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
      setAviso(response.data.message)

    }
  }
  return (
    <div className="product-container" >
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
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
          value={usercategory}
          type="text"
          placeholder='Categoria do Produto'
          onChange={e => setPCategory(e.target.value)}
          required
        />
        <input
          className='inputPrecoProduct'
          value={useprice}
          type="float"
          placeholder='Preço do Produto'
          onChange={e => setPrice(e.target.value)}
          required
        />
        <input
          className='inputFileProduct'
          type="file"
          placeholder='Imagem do Produto'
          onChange={e => setImg(e.target.files[0])}
          required
        />
        
        <button data-testid="form-btn" type='submit' > <img className="imgButton" src={imgButton} /> <p className='nameButtonProduct'>OK</p></button>
      </form>
    </div>
  );
}