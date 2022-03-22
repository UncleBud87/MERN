import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllProducts from './components/AllProducts';
import CreateNewProduct from './components/CreateNewProduct';
import ProductDetails from './components/ProductDetails';

function App() {

let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/" className='btn btn-info'>Home</Link>
        <h1>Product API</h1>
        <Switch>
          <Route exact path="/">
            <CreateNewProduct formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}></CreateNewProduct>
            <hr />
            <AllProducts formSubmitted = {formSubmitted}></AllProducts>
          </Route>
          <Route exact path="/products/:_id">
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
