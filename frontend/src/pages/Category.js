import React, { useState } from 'react';
import Menu from '../components/Menu/Menuleft'
import SetCategory from '../components/Category/setCategory'
import './Category.css'


export default function Category(props) {
  const [aviso, setAviso] = useState('');
  return (
    <div>
      
      <Menu />
      <h1 data-testid='text' className='aviso' >{aviso}</h1>
      <SetCategory aviso={setAviso} />
     
    </div>
  );
}

