import React, { useState } from "react";

const Basic2 = () => {
  // ObjectのPropを扱いたいのでinterfaceを実装
  interface Product {
    id: number;
    name: string;
  }

  //   次にリストにしたいのでProduct[]で型定義
  const [products, setProducts] = useState<Product[]>([]);
  const newProducts = () => {
    setProducts([
      ...products,
      {
        id: products.length,
        name: "Hello, React Native",
      },
    ]);
  };
  return (
    <>
      <div>
        <button onClick={newProducts}>Add New Product</button>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {" "}
              {product.name} id: {product.id}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Basic2;
