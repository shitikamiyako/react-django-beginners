import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const time = () => {
    setCount((prevCount) => (prevCount += 1));
  };

  useEffect(() => {
    const interval = setInterval(time, 1000);
    // return以下(つまりcleanupの部分)はコンポーネントが破棄された場合に発火してほしい処理を書く
    // 今回はこのTimer.tsxはTimerContainer.tsxにインポートして使い、論理積で表示非表示を決めるので非表示になった場合(コンポーネントの破棄)に発火する処理になる
    return () => {
      clearInterval(interval);
      console.log("cleared");
    };
  }, []);

  return (
    <>
      <div>{count}</div>
    </>
  );
};

export default Timer;
