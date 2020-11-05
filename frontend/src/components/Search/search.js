import React, { useState, useEffect } from 'react';
import './search.css'

export default function Search(props) {
  return (
    <div className="div-search">
      <form>
        <input
          className='inputProduct'
          type="text"
          placeholder='Nome do Produto'
          required
        />
        <button data-testid="form-btn" type='submit' ><p className='nameButtonSearch'></p></button>
      </form>
    </div>
  );
}