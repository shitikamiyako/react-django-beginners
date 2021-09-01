import React, { useReducer } from "react";

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

const BasicReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* 返り値はcurrentState.countの形式になるのでそれに即した書き方をする */}
      <h2>Count {state.count}</h2>
      {/* 実際に使う場合もdispatch()の引数で上記で定義したオブジェクトで指定 */}
      <button onClick={() => dispatch({ type: "add_1" })}>Add + 1</button>
      <button onClick={() => dispatch({ type: "multiple_3" })}>
        Multiple * 3
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default BasicReducer;
