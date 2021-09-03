import { ACTIONTYPE, SELL_MEAT } from "./actionTypes";

const initialState = { numOfMeat: 0 };

const reducerMeet = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case SELL_MEAT:
      return { ...state, numOfMeat: state.numOfMeat - 1 };
  }
};

export default reducerMeet;
