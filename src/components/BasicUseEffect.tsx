import React, { useState, useEffect } from "react";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  const prevCountHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((prevCount) => (prevCount += 1));
  };

  const itemChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  //   Reactはpropが変わるだけでレンダリングが起きる(今回の例だと、inputフォームのvalueの値がリアルタイムで変化する可能性がある)
  // なのでuseEffectを使う場合、実行関数がどのpropに反応して実行されるべきか第二引数で定義をする。
  // 今回はcountのStateが変更されたら実行してほしいので以下の通りになる
  useEffect(() => {
    console.log("useEffect invoke");
  }, [count]);

  return (
    <div>
      <button onClick={prevCountHandler}>Click {count}</button>
      <br />
      <input type="text" value={item} onChange={itemChangeHandler} />
    </div>
  );
};

export default BasicUseEffect;
