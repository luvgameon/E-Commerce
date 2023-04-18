import React from 'react'

import MainHeader from '../Components/Header/MainHeader'

import CartState from '../store/CartState'
import pic from "../asset/pic.jpg";



export default function Home() {

  return (<>

    <CartState>

<MainHeader/>


</CartState>
<img src={pic} style={{width:'100%',height:'100%'}} alt='pic'/>

    </>
  )
}
