import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Main from './pages/Main'
import Category from './pages/Category'
import Product from './pages/Product'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import StroreProvider from './components/Authentication/Provider'
import RoutesPrivate from './components/Routes/Private/Private';

export default function Routes() {
  return (
    <Router>
      <Header />
      <StroreProvider>
      <Switch>
        <Route exact path='/' component={Login} />
        <RoutesPrivate exact path='/main' component={Main} />
        <RoutesPrivate exact path='/category' component={Category} />
        <RoutesPrivate exact path='/product' component={Product} />
      </Switch>
      </StroreProvider>
      <Footer />
    </Router>
  );
}