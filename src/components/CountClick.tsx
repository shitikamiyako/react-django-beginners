import React from "react";

// 親コンポーネントでpropsで渡したい属性の型を定義する
type Props = {
  handleClick: () => void;
  //   子コンポーネントのchildren要素を受け取りたい時
  children: React.ReactNode;
};

// 引数にしておく
const CountClick: React.FC<Props> = (prop) => {
  console.log("clicked", prop.children);
  return (
    <div>
      <button onClick={prop.handleClick}>{prop.children}</button>
    </div>
  );
};
// 再利用するといずれかのコンポーネントでアクションを起こした場合に全ての当該コンポーネントのレンダリングが起きるのでMemoにする
// 関数コンポーネントなので今回はTSで書いてあることもあり、基本的にはありえないが渡されたpropやchildrenの内容が動的に変化しない限り、初回のレンダリング結果が保持されることになる
export default React.memo(CountClick);
