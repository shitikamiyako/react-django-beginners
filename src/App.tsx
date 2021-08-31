import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Basic2 from "./components/Basic2";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Basic2 />
      </header>
    </div>
  );
};

export default App;
