// useContextでcreateContextのコンポーネントから値を受け取れるようにする
import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const TestB = () => {
  const value = useContext(AppContext);

  return (
    <div>
      <h3>B</h3>
      {value}
    </div>
  );
};

export default TestB;
