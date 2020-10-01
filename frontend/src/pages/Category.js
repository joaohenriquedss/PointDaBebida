import React, {useState} from 'react';
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import Menuleft from '../components/Menu/Menuleft'
import SetCategory from '../components/Category/setCategory'
export default function Category(props) {
  const [testename, setteste] = useState('teste');

  

  return (
    [
    <div>
      <h1>{testename}</h1>
    </div>,
    <SetCategory teste={setteste}/>,
    <Footer />]

  );
}

