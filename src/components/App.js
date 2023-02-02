import React from "react";
import "../styles/app.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>React Test</h1>
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search />
    </div>
  );
}

export default App;
