import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "./CartItem";
import Table from "react-bootstrap/Table";
import ProductContext from "../../store/product-context";

export default function Cart() {
 
  const cartState = useContext(ProductContext);
  const clear=()=>{
    alert("Purchased Successfull!")
    window.location.reload();
  }

  


  let totalitem = 0;
  cartState.items.forEach((item) => {
    totalitem = totalitem + Number(item.quantity);
  });
 

  const listItem = (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {cartState.items.map((item) => (
          <CartItem
            key={item.title}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            quantity={item.quantity}
          />
        ))}
      </tbody>
    </Table>
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true) 
    
  
  let totalprice = 0;
  cartState.items.forEach((item) => {
    totalprice += item.quantity * item.price;
  });
  // useEffect(() => {
  //   fetch(
  //     `https://e-comm-c4767-default-rtdb.firebaseio.com//cart${userEmail}.json`,
  //     { method: "GET" }
  //   ).then((res) => {
  //     if (res.ok) {
  //       res.json().then((data) => {
          
  //         setgetData(data);
  //         console.log('getrun')
          
  //       });
  //     } else {
  //       return res.json().then((data) => {
  //         console.log('Something Went wrong');
  //       });
  //     }
  //   });
  // }, [cartState]);
  

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Cart {totalitem}  <i className="fa fa-shopping-cart"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            My Cart <i className="fa fa-shopping-cart"></i>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {listItem}
          <hr />
          <h5>Total Price {totalprice} Rs</h5>
          <Button onClick={clear} className="mx-2" variant="primary">
          Purchased Now!
        </Button>
        {""}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
