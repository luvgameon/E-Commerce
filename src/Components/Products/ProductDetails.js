import React from "react";
import { Card } from "react-bootstrap";


import { useParams } from "react-router-dom";
import CartState from "../../store/CartState";
import Header from "../Header/Header";

export default function ProductDetails(props) {
  const param=useParams();
  return (
    <div>
      <CartState>
        <Header />
        <Card className='text-center' style={{ width: '18rem' }}>
        <Card.Title className='text-center'>{param.title}</Card.Title>
      <Card.Img variant="top" src={param.img} />
      <Card.Body>
        <h4>Price : {param.price}Rs</h4>
        
      
      </Card.Body>
    </Card>
      
      </CartState>
      {param.id}
      {param.img}
      
    </div>
  );
}
