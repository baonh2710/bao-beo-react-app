import logo from "./logo.svg";
import "./App.css";
import Clock from "./Components/Clock";
import FontSizeChanger from "./Components/FontSizeChanger";
import CartItem from "./Components/CartItem";
import FocusTimer from "./Components/FocusTimer";
import Counter from "./Components/Counter";
import NoteManager from "./Components/NoteManager";
import Calculator from "./Components/Calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Clock></Clock>
      <hr></hr>
      <FontSizeChanger></FontSizeChanger>
      <hr></hr>
      <CartItem></CartItem>
      <hr></hr>
      <FocusTimer></FocusTimer>
      <hr></hr>
      <Counter></Counter>
      <hr></hr>
      <NoteManager></NoteManager>
      <hr></hr>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
