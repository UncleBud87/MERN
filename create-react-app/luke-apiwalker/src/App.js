import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch, // tlls react which componen/element will show based on route
  Route, // specifys the route for a component/element
  Link // anchor tag that doesnt reload entire page
} from "react-router-dom";

import Routing from './components/Routes';
import StarWarsSearchForm from './components/StarWarsSearchForm';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/home">Home</Link>
    <StarWarsSearchForm></StarWarsSearchForm>

        <Switch>
          <Route exact path="/home">
            <h1>Welcome</h1>
          </Route>
          <Route exact path="/:planets/:id">
            <Routing></Routing>
          </Route>
          <Route exact path="/:people/:id/">
            <Routing></Routing>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

