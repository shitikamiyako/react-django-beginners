import React, { useState, useMemo } from "react";

const Memo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const AddCount1 = () => {
    setCount1((prevCount1) => prevCount1 + 1);
  };
  const AddCount2 = () => {
    setCount2((prevCount2) => prevCount2 + 1);
  };

  // while文などの繰り返し処理はレンダリングに負荷がかかるのでメモ化する
  // useMemoがないとレンダリングされない
  const isOdd = useMemo(() => {
    let i = 0;
    while (i < 10) i++;
    return count1 % 2 !== 0;
    // 第2引数に依存するStateを指定
  }, [count1]);

  return (
    <div>
      <button onClick={AddCount1}>Count1: {count1}</button>
      <br />
      <span>{isOdd ? "Odd number" : "Even number"}</span>
      <br />
      <button onClick={AddCount2}>Count2: {count2}</button>
    </div>
  );
};

export default Memo;
