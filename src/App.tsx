import React from "react";
import "./App.css";
import logo from "./logo.svg";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
// import TimerContainer from "./components/TimerContainer";
// import ApiFetch from "./components/ApiFetch";
import AppContext from "./contexts/AppContext";
// import TestA from "./components/TestA";
// import TestB from "./components/TestB";
// import BasicReducer from "./components/BasicReducer";
import { useReducer } from "react";
import CompB from "./components/CompB";

// TypeScriptではReducerを作るときも型をちゃんと定義しないとダメ

// まず初期値はプロパティを設定してしておく。つまり、Reducerに関わるStateを設計をする場合はここから始めるべき？
const initialState = { count: 0 };
// actionにあてるためにACTIONTYPEを型にしておく。payload(actionから任意の値などを引数としてもらってそれを使って返す場合のプロパティ)が必要な場合はそちらも。
type ACTIONTYPE =
  | { type: "add_1"; payload?: number }
  | { type: "multiple_3"; payload?: number }
  | { type: "reset"; payload?: typeof initialState };

const reducer = (currentState: typeof initialState, action: ACTIONTYPE) => {
  // typeプロパティを引数にする
  switch (action.type) {
    case "add_1":
      return { count: currentState.count + 1 };
    case "multiple_3":
      return { count: currentState.count * 3 };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // createContextを定義したファイルをインポートしてProviderとすることでvalueを子コンポーネント以下で受け取れるようにする
    // useReducerのアクションをグローバルに使いたい場合はまずuseReducerのstateとdispatchをvalueの引数にする
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo" />
          Count {state.count}
          <CompB />
          {/* <BasicReducer /> */}
          {/* <ApiFetch />
          <TestA />
          <TestB /> */}
          {/* <TimerContainer /> */}
          {/* <BasicUseEffect /> */}
          {/* <Basic2 /> */}
        </header>
      </div>
    </AppContext.Provider>
  );
};

export default App;
