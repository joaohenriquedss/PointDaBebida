import React, { useState, Component } from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import Menuleft from '../components/Menu/Menuleft'
import getListProduct from '../components/Product/getProduct'
import './Main.css'
class Main extends getListProduct {
  render() {
    const { products } = this.state;
    return (
      <div>
        <Header />
        <Menuleft />
        <div className='listProducts'>
          {products.map(product =>
            <li key={product}>
              <h1>{product.name}</h1>
              <h1>{product.price} $</h1>
            </li>
          )}
        </div>
        <Footer />
      </div>
    );
  }
};

export default Main;
