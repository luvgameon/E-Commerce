import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";


import Home from './Pages/Home';


function App() {
  return (
    <div>
   
      <main>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact path='/contact'>
        <ContactUs />
      </Route>

      </main>
      
    </div>
  );
}

export default App;
