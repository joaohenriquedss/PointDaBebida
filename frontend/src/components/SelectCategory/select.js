import React, { useState, useEffect } from 'react';
import './select.css'
import api from '../../services/api'

export default function Select(props) {
  const [getList, setList] = useState([]);

  useEffect(async () => {
    const response = await api.get('category/get');
    const data = await response.data
    setList(data)
  }, [])
  return (
    <div className="div-select">
      <select className="select-list">
        <option className='nameCategoryTodos'>Todos</option>
        {getList.map(getList =>
          <option className='nameCategory' type="submit">{getList.name}</option>
        )}
      </select>
    </div>
  );
}