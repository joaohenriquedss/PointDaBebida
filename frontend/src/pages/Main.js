import React, { useState, Component } from 'react'
import Menuleft from '../components/Menu/Menuleft'
import GetListProduct from '../components/Product/getProduct'
import Search from '../components/Search/search'
import './Main.css'

export default function Main(props) {
  
  return (
    <div>
      <Menuleft />
      
      <Search/>
      <GetListProduct />
    </div>
  );
}



