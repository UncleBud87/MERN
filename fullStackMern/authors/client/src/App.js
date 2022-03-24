
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllAuthors from './components/Authors';
import CreateNewAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';
import WrongPath from './components/WrongPath.jsx'

function App() {

  let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/" className='btn btn-info'>Home</Link>
        <h1>Favorite Authors</h1>
        <Switch>
          <Route exact path="/">
            <AllAuthors formSubmitted={formSubmitted}></AllAuthors>
          </Route>
          <Route exact path="/authors">
            <CreateNewAuthor formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></CreateNewAuthor>
          </Route>
          <Route exact path="/authors/:_id/edit">
            <EditAuthor></EditAuthor>
          </Route>
          <Route exact path="/authors/:_id">
            <WrongPath></WrongPath>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;