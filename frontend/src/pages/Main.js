import React, { useState, Component } from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import Menuleft from '../components/Menu/Menuleft'
import GetListProduct from '../components/Product/getProduct'
import './Main.css'

export default function Main(props) {
  return (
    <div>
      <Menuleft />
      <GetListProduct />
    </div>
  );
}



