import React,{useState , useEffect} from 'react';
import api from '../../services/api'

export default function GetListProducts(props) {
  const [getList, setList] = useState([]);

  useEffect(async () => {
    const response = await api.get('product/get');
    const data = await response.data
    setList(data)
  }, [])
  return (
    <div className='listProducts'>
          {getList.map(getList =>
            <li key={getList._id}>
              <h1>{getList.name}</h1>
              <h1>{getList.price} $</h1>
            </li>
          )}
        </div>
  );
}