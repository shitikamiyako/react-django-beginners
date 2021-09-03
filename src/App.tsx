import React, { useState, useReducer, useCallback } from "react";
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
import CountClick from "./components/CountClick";
import CountDisplay from "./components/CountDisplay";
// import CompB from "./components/CompB";
// import Memo from "./components/Memo";

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

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 実行関数をMemo化したい場合はuseCallback
  // アロー関数はレンダリングされるたびに新規の関数となり、レンダリング以前のそれとは等価とはならない
  // つまり、実行関数をpropとしてコンポーネントに渡し、再利用している場合は当該コンポーネントをMemo化するだけでは不要なレンダリングは防げない
  // よって、実行環境をMemo化しておく。ちなみに今回の場合は依存配列に各countStateを入れてしまうと、実行するたびにやはり新規関数扱いになるので意味がなくなる
  const AddCount1 = useCallback(() => {
    setCount1((prevCount1) => prevCount1 + 1);
  }, []);
  const AddCount2 = useCallback(() => {
    setCount2((prevCount2) => prevCount2 + 1);
  }, []);

  return (
    // createContextを定義したファイルをインポートしてProviderとすることでvalueを子コンポーネント以下で受け取れるようにする
    // useReducerのアクションをグローバルに使いたい場合はまずuseReducerのstateとdispatchをvalueの引数にする
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo" />
          Count {state.count}
          {/* コンポーネントに引数を渡す場合、TSの場合は当該コンポーネント側で予めtypeやinterfaceで定義して引数にしておく必要がある */}
          <CountDisplay name="count1" count={count1} />
          <CountClick handleClick={AddCount1}> AddCount1</CountClick>
          <CountDisplay name="count2" count={count2} />
          <CountClick handleClick={AddCount2}>AddCount2</CountClick>
          {/* <Memo /> */}
          {/* <CompB /> */}
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
