
import './App.css';
import SignIn from './components/SignIn';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
          <SignIn></SignIn>
          </Route>
          <Route exact path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
