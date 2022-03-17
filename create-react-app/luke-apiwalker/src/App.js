import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StarWars from './components/StarWarsAPI';
import FormInfo from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <div>
        <BrowserRouter>
        <FormInfo></FormInfo>
          <Switch>
            <Route exact path = '/:category/:id'>
              <StarWars></StarWars>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
