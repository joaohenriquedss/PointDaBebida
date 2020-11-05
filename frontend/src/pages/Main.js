import React, { useState, Component } from 'react'
import Menuleft from '../components/Menu/Menuleft'
import GetListProduct from '../components/Product/getProduct'
import Select from '../components/SelectCategory/select'
import Search from '../components/Search/search'
import './Main.css'

export default function Main(props) {
  return (
    <div>
      <Menuleft />
      <Select/>
      <Search/>
      <GetListProduct />
    </div>
  );
}



