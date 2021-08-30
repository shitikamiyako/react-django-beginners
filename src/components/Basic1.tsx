import React, { useState } from "react";

const Basic1: React.FC = () => {
  // Objectの例
  interface Product {
    name: string;
    price: number | string;
  }
  const [product, setProducts] = useState<Product>({ name: "", price: "" });

  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   Objectの一部を書き換える場合は...Objectで記述する。すると要素ごとに分解されるので書き換えたいところだけ以下のようにする
    setProducts({ ...product, name: e.target.value });
  };
  const onChangePriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   Objectの一部を書き換える場合は...Objectで記述する。すると要素ごとに分解されるので書き換えたいところだけ以下のようにする
    setProducts({ ...product, price: e.target.value });
  };

  return (
    <>
      <div>
        <form action="">
          <input
            type="text"
            value={product.name}
            onChange={onChangeNameHandler}
          />
          <br />
          <input
            type="text"
            value={product.price}
            onChange={onChangePriceHandler}
          />
        </form>

        <h1>Product Name is {product.name}</h1>
        <h1>Product Price is {product.price}</h1>
      </div>
    </>
  );
};

export default Basic1;
