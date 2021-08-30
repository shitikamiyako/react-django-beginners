import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Basic1 from "./components/Basic1";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Basic1 />
      </header>
    </div>
  );
};

export default App;
