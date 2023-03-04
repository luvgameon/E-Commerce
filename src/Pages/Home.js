import React from 'react'

import MainHeader from '../Components/Header/MainHeader'

import CartState from '../store/CartState'


export default function Home() {
  return (<>
    <CartState>

<MainHeader/>

</CartState>
    <h1 className='text-center'>Welcome </h1>
    </>
  )
}
