import React from 'react'
import { BrowserRouter, Route } from  'react-router-dom'
import Login from './pages/Login';
import Main from './pages/Main'
import Category from './pages/Category'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Login}/>
      <Route path='/main' component={Main}/>
      <Route path='/category' component={Category}/>
    </BrowserRouter>
  );
}