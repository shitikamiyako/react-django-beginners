import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const CompC = () => {
  // Context.Providerのvalueからパスしてもらう。
  const { dispatch } = useContext(AppContext);
  return (
    <div>
      {/* <p>test</p> */}
      {/* あとは普通にdispatchとして使う */}
      <button onClick={() => dispatch({ type: "add_1" })}>Add + 1</button>
      <button onClick={() => dispatch({ type: "multiple_3" })}>
        Multiple * 3
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>{" "}
    </div>
  );
};

export default CompC;
