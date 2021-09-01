// useContextのためにまずはcreateContextを定義したファイルを作る
import { createContext } from "react";

// Reducerをグローバルに使いたい場合の設定、同じことを書いているのでおそらくReducerのファイルと統合する方が吉
const initialState = { count: 0 };
type ACTIONTYPE =
  | { type: "add_1"; payload?: number }
  | { type: "multiple_3"; payload?: number }
  | { type: "reset"; payload?: typeof initialState };

// Context.Providerのvalueの引数は{}なので型アサーションする方が丸い。
// interfaceで定義してnullとのunionもありだが、初期値が必要なので型アサーションの方が間違えにくいとも思う。今後要研究。
const AppContext = createContext(
  {} as {
    //state:numberでもよし。ReducerのStateに当たる部分に応じて適切に
    state: typeof initialState;
    // dispatchの型はReact.Dispatchらしい。引数で<ACTIONTYPE>を指定する。
    dispatch: React.Dispatch<ACTIONTYPE>;
  }
);

export default AppContext;
