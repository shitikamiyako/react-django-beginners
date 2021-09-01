import React from "react";
import "./App.css";
import logo from "./logo.svg";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
// import TimerContainer from "./components/TimerContainer";
import ApiFetch from "./components/ApiFetch";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <ApiFetch />
        {/* <TimerContainer /> */}
        {/* <BasicUseEffect /> */}
        {/* <Basic2 /> */}
      </header>
    </div>
  );
};

export default App;
