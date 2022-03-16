import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch, // tlls react which componen/element will show based on route
  Route, // specifys the route for a component/element
  Link // anchor tag that doesnt reload entire page
} from "react-router-dom";
import Routing from './components/routing';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Link to="/home">Home</Link>


      <Switch>
        <Route exact path = "/home">
          <h1>Welcome</h1>
        </Route>
      </Switch>


      <Switch>
        <Route exact path = "/:num">
          <Routing></Routing>
        </Route>
      </Switch>


      <Switch>
        <Route exact path = "/:num/:color1/:color2">
          <Routing></Routing>
        </Route>
      </Switch>


    </div>
    </BrowserRouter>
  );
}

export default App;
