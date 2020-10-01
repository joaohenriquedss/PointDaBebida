import React, { useState } from 'react';
import Header from '../components/Header/header'
import Menu from '../components/Menu/Menuleft'
import Footer from '../components/Footer/footer'
import SetCategory from '../components/Category/setCategory'
import './Category.css'

export default function Category(props) {
  const [aviso, setAviso] = useState('');
  return (
    <div>
      <Header/>
      <Menu />
      <h1 className='aviso' >{aviso}</h1>
      <SetCategory aviso={setAviso} />
      <Footer/>
    </div>
  );
}

