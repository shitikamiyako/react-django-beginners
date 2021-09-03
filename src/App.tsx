import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

import rootReducer from "./reducers";
import { SELL_MEAT, SELL_VEGETABLE } from "./reducers/actionTypes";

function App() {
  const initialState = {
    reducerMeet: { numOfMeat: 30 },
    reducerVegetable: { numOfVegetable: 30 },
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
      </header>
    </div>
  );
}

export default App;
