import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Construction from "./images/construction.jpg";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="App">
        <Welcome />
        <Header />
      </div>
      <div>
        <img src={Construction} alt="Under construction" className="image" />
      </div>
    </div>
  );
};

export default App;
