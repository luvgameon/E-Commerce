import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import ProductContext from "../../store/product-context";

import { Link } from "react-router-dom";

export default function Product(props) {
  const cartState = useContext(ProductContext);

  // useEffect(() => {
  //   fetch(
  //     `https://e-comm-c4767-default-rtdb.firebaseio.com//cart${userEmail}.json`,
  //     { method: "GET" }
  //   ).then((res) => {
  //     if (res.ok) {
  //       res.json().then((data) => {
  //         setapigetData(data);
  //         console.log('get run');
          
         
          
  //       });
  //     } else {
  //       return res.json().then((data) => {
  //         console.log('something went wrong');
  //       });
  //     }
  //   });
    
  // }, []);

  const addproductcart = (event) => {
    // fetch(
    //       `https://crudcrud.com/api/7acbcea4778a45e38b45b91f3d3b2927/cart${userEmail}`,
    //       { method: "GET" }
    //     ).then((res) => {
    //       if (res.ok) {
    //         res.json().then((data) => {
    //           setapigetData(data);
    //           console.log('get run');
              
             
              
    //         });
    //       } else {
    //         return res.json().then((data) => {
    //           console.log('something went wrong');
    //         });
    //       }
    //     });
    // console.log('product run');
   

    // let indxOfItem = apigetData.findIndex((i) => i.id === props.id);

    // if (indxOfItem === -1) {
    //   fetch(
    //     `https://e-comm-c4767-default-rtdb.firebaseio.com//cart${userEmail}.json`,
    //     {
    //       method: "POST",
    //       body: JSON.stringify({
    //         id: props.id,
    //         title: props.title,
    //         price: props.price,
    //         img: props.img,
    //         quantity: 1,
    //       }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   ).then((res)=>{
    //     res.json().then((data) => {
    //       let temp=[...apigetData,data]
    //       setapigetData(temp)
          
    //       console.log(data);
    //     });
    //   });
    // } else {
    //   console.log("put chal raha h");
    //   fetch(
    //     `https://e-comm-c4767-default-rtdb.firebaseio.com//cart${userEmail}/${apigetData[indxOfItem]._id}.json`,
    //     {
    //       method: "PUT",
    //       body: JSON.stringify({
    //         id: props.id,
    //         title: props.title,
    //         price: props.price,
    //         img: props.img,
    //         quantity: apigetData[indxOfItem].quantity + 1,
    //       }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    // }

    cartState.addItem({ ...props, quantity: 1 });
  };


  const link = `/productdetails/${props.id}`;

  return (
    <>
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Link to={link}>
          <Card.Img variant="top" src={props.img} />
        </Link>
        <Card.Body>
          <h4>Price : {props.price}Rs</h4>

          <Button
            className="text-center"
            onClick={addproductcart}
            variant="secondary"
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
