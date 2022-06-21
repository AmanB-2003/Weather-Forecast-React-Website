//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
import './App.css';
import Temp from './Temp-now';
import Graph from './Graph';

function App() {
  return (
    <div className="App">
      {/* <label>Your City </label>  // feature to be developed 
      <input type="text" placeholder="London" ></input> */}

      <Temp></Temp>
      
      
    </div>

  );
}

export default App;
