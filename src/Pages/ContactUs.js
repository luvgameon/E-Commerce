import React,{useRef} from 'react'
import axios from 'axios';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Components/Header/Header';
import MainHeader from '../Components/Header/MainHeader';

export default function ContactUs() {
  const NameRef = useRef('');
  const EmailRef = useRef('');
  const PhoneRef = useRef('');

  async function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const UserDetails = {
       name: NameRef.current.value,
      email: EmailRef.current.value,
      phone: PhoneRef.current.value,
    };

    
    // const respose = await fetch(
    //   "https://react-http-6410a-default-rtdb.firebaseio.com/user.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(UserDetails),
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   }
    //   );
    //   const data = await respose.json();
    //   console.log(data);
  // const response=await axios.post('https://react-http-6410a-default-rtdb.firebaseio.com/user.json',{name: NameRef.current.value,
  // email: EmailRef.current.value,
  // phone: PhoneRef.current.value,})
  
  // console.log(response.data);
  const mydata=await axios.get('https://react-http-6410a-default-rtdb.firebaseio.com/user.json');
  console.log('mydata',mydata.data);
  }
  return (<>
    <MainHeader/>

    <h1 className='text-center'>ContactUs</h1>
    <div className='container' >

    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" ref={NameRef}/>
        </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={EmailRef}/>
       
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" ref={PhoneRef}/>
       
      </Form.Group>
      <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  </>
  
  )
}
