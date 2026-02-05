import logo from "./logo.svg";
import "./App.css";
import Clock from "./Components/Clock";
import FontSizeChanger from "./Components/FontSizeChanger";
import CartItem from "./Components/CartItem";

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
    </div>
  );
}

export default App;
