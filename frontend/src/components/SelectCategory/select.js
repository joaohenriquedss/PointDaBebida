import React, { useState, useEffect } from 'react';
import './select.css'
import api from '../../services/api'

export default function Select(props) {

  const [getList, setListCategory] = useState([]);
  const setCategory = props.category;
  const setList = props.listProduct;
  async function handleSubmit(e) {
    e.preventDefault();
    let category = e.target.value
    if (category == "Todos" || !category) {
      const response = await api.get('product/get');
      const data = await response.data
      setList(data)
    } else {
      const cate = {
        "name": category
      }
      const response = await api.get('product/getFilter' + category);
      const data = await response.data
      console.log(data)
      setList(data)
    }
  }
  
  useEffect(async () => {
    const response = await api.get('category/get');
    const data = await response.data
    setListCategory(data)
  }, [])

  return (
    <div className="div-select">
      <select className="select-list" onChange={handleSubmit}>
        <option className='nameCategory'>Todos</option>
        {getList.map(getList =>
          <option className='nameCategory' key={getList._id} value={getList.name}>{getList.name}</option>
        )}
      </select>
    </div>
  );
}