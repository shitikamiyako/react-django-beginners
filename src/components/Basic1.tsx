import React from "react";

const Basic1 = () => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("test");
  };

  return (
    <>
      <div>
        <button onClick={clickHandler}>Click</button>
      </div>
    </>
  );
};

export default Basic1;
