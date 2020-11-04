import React, { useState } from 'react';
import Menu from '../components/Menu/Menuleft'
import SetProduct from '../components/Product/setProduct'



export default function Category(props) {
  const [aviso, setAviso] = useState('');
  return (
    <div>

      <Menu />
      
      <SetProduct aviso={setAviso}/>
      <h1 data-testid='text' className='aviso' >{aviso}</h1>

    </div>
  );
}

