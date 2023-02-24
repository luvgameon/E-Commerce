import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Productslist from './Components/Products/Productslist';
import CartState from './store/CartState';


function App() {
  return (
    <>
    <CartState>

    <Header/>
    <Productslist/>
    </CartState>
      </>
  );
}

export default App;
