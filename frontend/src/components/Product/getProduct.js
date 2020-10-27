import React,{useState , useEffect} from 'react';
import image from '../../imgs/p6.png'
import api from '../../services/api'
import './getProduct.css'
const image_path = 'http://localhost:8000/'


export default function GetListProducts(props) {
  console.log(api.get())
  const [getList, setList] = useState([]);

  useEffect(async () => {
    const response = await api.get('product/get');
    const data = await response.data
    setList(data)
  }, [])
  return (
    <div className='listProducts'>
          {getList.map(getList =>
            <li className='li-products' key={getList._id}>
              <img className='baseProduct' src={image}></img>
              <h1 className='nameProduct'>{getList.name}</h1>
              <h2 className='namePrice'>{getList.price} $</h2>
              <img className='imageProduct' src={image_path+(getList.image_path)}></img>
            </li>
          )}
    </div>

  );
}