import React from "react";
import "./App.css";
import logo from "./logo.svg";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
// import TimerContainer from "./components/TimerContainer";
import ApiFetch from "./components/ApiFetch";
import AppContext from "./contexts/AppContext";
import TestA from "./components/TestA";
import TestB from "./components/TestB";

const App: React.FC = () => {
  return (
    // createContextを定義したファイルをインポートしてProviderとすることでvalueを子コンポーネント以下で受け取れるようにする
    <AppContext.Provider value={"test"}>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo" />
          <ApiFetch />
          <TestA />
          <TestB />
          {/* <TimerContainer /> */}
          {/* <BasicUseEffect /> */}
          {/* <Basic2 /> */}
        </header>
      </div>
    </AppContext.Provider>
  );
};

export default App;
