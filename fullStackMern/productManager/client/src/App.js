import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllProducts from './components/AllProducts';
import CreateNewProduct from './components/CreateNewProduct';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Product API</h1>
      <CreateNewProduct></CreateNewProduct>
      <hr />
      <AllProducts></AllProducts>
    </div>
    </BrowserRouter>
  );
}

export default App;
