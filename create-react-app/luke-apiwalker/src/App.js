import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StarWars from './components/StarWarsAPI';

function App() {
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <div>
        <BrowserRouter>
        <Switch>
          <Route>
            <StarWars></StarWars>
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
