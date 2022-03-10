import logo from './logo.svg';
import './App.css';
import People from '../../putting-it-together/src/components/People';

function App() {
  return (
    <div className="App">
      <People firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"Black"}></People>
      <People firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"Brown"}></People>
      <People firstName = {"Millard"} lastName = {"Fillmore"} age = {50} hairColor = {"Brown"}></People>
      <People firstName = {"Maria"} lastName = {"Smith"} age = {62} hairColor = {"Brown"}></People>
    </div>
  );
}

export default App;
