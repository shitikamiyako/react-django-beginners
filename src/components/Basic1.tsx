import React, { useState } from "react";

const Basic1 = () => {
  let [count, setCount] = useState(0);
  //   まず基本的なHandler
  //   const BasicCountHandler = () => {
  //     setCount((count += 1));
  //   };
  //   次に前回のレンダリング結果を参照する形でのHandler
  const PreviousCountHandler = () => {
    setCount((count += 1));
    // つまり1回のレンダリングでまずcount = 1となりその結果をprev-で参照して+1するので、最終的にcount = 2
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div>
        <button onClick={PreviousCountHandler}>
          {/* 同じことをjsxでやるなら以下 */}
          {/* <button onClick={() => setCount((prevCount) => prevCount + 1)}> */}
          Count {count}
        </button>
      </div>
    </>
  );
};

export default Basic1;
