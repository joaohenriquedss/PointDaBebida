import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Main from './pages/Main'
import Category from './pages/Category'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/category' component={Category} />
      </Switch>
      
    </BrowserRouter>
  );
}