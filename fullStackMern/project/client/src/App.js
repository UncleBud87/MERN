
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllPets from './components/Pets';
import AddPet from './components/AddPet';
import EditPet from './components/EditPet';
import AdoptPet from './components/AdoptPet';

function App() {

  let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        
        <h1>Pet Shelter <Link to="/" className='btn btn-info'>Home</Link></h1>
        <Switch>
          <Route exact path="/">
            <AllPets formSubmitted={formSubmitted}></AllPets>
          </Route>
          <Route exact path="/pet">
            <AddPet formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></AddPet>
          </Route>
          <Route exact path="/pet/:_id/edit">
            <EditPet></EditPet>
          </Route>
          <Route exact path="/pet/:_id">
            <AdoptPet></AdoptPet>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;