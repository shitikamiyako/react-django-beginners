import { ACTIONTYPE, SELL_VEGETABLE } from "./actionTypes";

export const initialState = { numOfVegetable: 0 };

const reducerVegetable = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case SELL_VEGETABLE:
      return { ...state, numOfVegetable: state.numOfVegetable - 1 };
  }
};

export default reducerVegetable;
