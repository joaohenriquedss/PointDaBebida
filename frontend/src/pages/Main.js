import React from 'react'
import Header from '../components/Header/index'
import Footer from '../components/Footer/footer'
import Menuleft from '../components/Menu/Menuleft'

export default function Main() {
  return ([
      <Header />,
      <Menuleft/>,
      <div>
        <h1>MENU</h1>
      </div>,
      <Footer />]
  )
}