import React, { Component } from 'react';
import api from '../../services/api'
class getListProduct extends Component {
  state = {
    products : [],
  }
  async componentDidMount(){
    const response = await api.get('product/get');
    this.setState({ products : response.data});
  }
};


export default getListProduct;