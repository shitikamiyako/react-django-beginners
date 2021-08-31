import React, { useState } from "react";
import Timer from "./Timer";

const TimerContainer = () => {
  const [display, setDisplay] = useState(true);

  const displayHandler = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div>
        <button onClick={displayHandler}>Switch Timer</button>
        {/* 論理積でOnOff */}
        {display && <Timer />}
      </div>
    </>
  );
};

export default TimerContainer;
