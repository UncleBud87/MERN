import logo from './logo.svg';
import './App.css';
import Peoples from './components/peoples';

function App() {
  return (
    <div className="App">
      <Peoples firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"Black"}></Peoples>
      <Peoples firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"Brown"}></Peoples>
      <Peoples firstName = {"Millard"} lastName = {"Fillmore"} age = {50} hairColor = {"Brown"}></Peoples>
      <Peoples firstName = {"Maria"} lastName = {"Smith"} age = {62} hairColor = {"Brown"}></Peoples>
    </div>
  );
}

export default App;
